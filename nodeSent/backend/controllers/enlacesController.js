const Enlaces = require('../models/Enlace');
const shortid = require('shortid');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

exports.nuevoEnlace = async (req, res, next) => {
    
    //Revisar si hay errores
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }

    //Crear un objeto
    const { nombre_original } = req.body;

    const enlace = new Enlaces();
    enlace.url = shortid.generate();
    enlace.nombre = shortid.generate();
    enlace.nombre_original = nombre_original;

    //Si el usuario esta autenticado
    if(req.usuario){
        const { password, descargas } = req.body;

        //Asignar a enlace el numero de descargas 
        if(descargas){
            enlace.descargas = descargas
        }

        //Asignar password
        if(password){
            //Hashear el password
            const salt = await bcryptjs.genSalt(10);
            enlace.password = await bcryptjs.hash(password, salt);
        }

        //Asignar el autor
        enlace.autor = req.usuario.id
    }

    //Guardar en db
    try {
        await enlace.save();
        res.json({ msg: `${enlace.url}` });
        next();
    } catch (error) {
        console.log(error);
    }
}

//Obtener el enlace 
exports.obtenerEnlace = async (req, res, next) => {

    //Verificar si existe el enlace
    const { url } = req.params;
    const enlace = await Enlaces.findOne({ url });

    if(!enlace){
        res.status(404).json({ msg: "El enlace no existe" });
        return next();
    }

    //Enlace existente
    res.json({ archivo: enlace.nombre })

    //Descargas iguales a 1 -> Borrar la entrada y borrar el archivo

    //Descargas son > a 1 -> Restar 1

}