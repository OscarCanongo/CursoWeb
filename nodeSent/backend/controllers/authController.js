const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { validationResult } = require('express-validator');
require('dotenv').config({ path: 'variables.env'});

exports.autenticarUsuario = async (req, res, next) => {
    
    //Revisar si hay errores
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    //Buscar el usuario para ver si esta registrado
    const { email, password } = req.body;
    const usuario = await Usuario.findOne ({ email });

    if(!usuario){
        res.status(401).json({ msg: 'El usuario no existe' });
        return next();
    }
    
    //Verificar el password y autenticar el usuario
    //Revisar el password
    if(bcryptjs.compareSync(password, usuario.password)){
        
        //Crear JWT
        const token = jwt.sign({
            id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email
        }, process.env.SECRETA, {
            expiresIn: '8h'
        });

        return res.json({token});
    
    } else{
       
        res.status(401).json({ msg: "Password incorrecto"});
        return next();
    }

}

exports.usuarioAutenticado = (req, res) => {

}