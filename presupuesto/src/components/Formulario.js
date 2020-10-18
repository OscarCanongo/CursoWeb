import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    const definirNombre = (e) => {
        setNombre(e.target.value);
    }
    const definirCantidad = (e) => {
        setCantidad(parseInt(e.target.value, 10));
    }
    //Agregar un gasto
    const definirGasto = (e) => {
        e.preventDefault();
        //validar
        if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        //construir el gasto
        const gasto = {
            nombre: nombre,
            cantidad: cantidad,
            id: shortid.generate()
        }
        //Pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);
        //Resetear el form
        setNombre('');
        setCantidad(0);
    }

    return (
        <form onSubmit={definirGasto}>
            <h2>Agrega tus salidas aqui</h2>
            {error ? <Error mensaje = "Ambos campos son obligatorios o presupuessto incorrecto" /> : null}
            <div className = "campo">
                <label>Nombre</label>
                <input
                    type = "text"
                    className = "u-full-width"
                    placeholder = "Ej. Transporte"
                    value = {nombre}
                    onChange = {definirNombre}
                />
            </div>
            <div className = "campo">
                <label>Cantidad</label>
                <input
                    type = "number"
                    className = "u-full-width"
                    placeholder = "Ej. 300"
                    value = {cantidad}
                    onChange = {definirCantidad}
                />
            </div>
            <input
                type = "submit"
                className = "button-primary u-full-width"
                value = "Agregar gasto"
            />
        </form>        
    );
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;