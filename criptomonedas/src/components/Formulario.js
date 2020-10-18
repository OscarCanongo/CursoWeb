import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios';
import Error from './Error';

const Boton = styled.input `
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;

const Formulario = ({setMonedaApp, setCriptomoneda}) => {

    //state del listado de criptomonedas
    const [criptos, setCriptos] = useState([]);

    const monedas = [
        {codigo: 'USD', nombre: 'Dolar'},
        {codigo: 'MXN', nombre: 'Peso'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra'}
    ]

    //Utilizar useMoneda
    const[moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', monedas);

    //Utilizar Criptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda("Elige tu criptomoneda", '', criptos);

    //State del error
    const [error, setError] = useState(false);

    //Ejecutar llamado a la API
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await axios.get(url);

            setCriptos(resultado.data.Data);
        }
        consultarAPI(); 
    }, []);

    //OnSubmit
    const cotizarMoneda = (e) => {
        e.preventDefault();
        
        //Validar si ambos campos estan llenos
        if (moneda === '' || criptomoneda === '') {
            setError(true);
            return;
        }

        //Pasar los datos al componente principal
        setError(false);
        setMonedaApp(moneda);
        setCriptomoneda(criptomoneda);
    }
    
    return (  
        <form
            onSubmit = {cotizarMoneda}
        >
            {error 
            ? <Error mensaje="Todos los campos son obligatorios"/> 
            : null}
            
            <SelectMonedas/>

            <SelectCripto/>
            
            <Boton 
                type = "submit"
                value = "Calcular"
            />
        </form>
    );
}
 
export default Formulario;