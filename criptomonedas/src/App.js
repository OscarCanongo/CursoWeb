import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario'
import axios from 'axios';
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  const [moneda, setMonedaApp] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [resultado, setResultado] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    
    const cotizarCriptomoneda = async () => {
      
      //Se evita la primera ejecucion
      if (moneda === '') {
        return;
      }

      //Consulta a la API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      //Mostrar el Spinner
      setCargando(true);

      //Ocultar el Spinner y mostrar el resultado
      setTimeout(() => {

        //Cambiar el estado de cargando
        setCargando(false);

        //Guardar cotización
        console.log(resultado.data.DISPLAY[criptomoneda][moneda]);
        setResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      
      }, 1000)
    }

    cotizarCriptomoneda();

  }, [moneda,criptomoneda]);

  //Mostar spinner o resultado
  const componente = (cargando) ? <Spinner/> : <Cotizacion resultado = {resultado}/>

  return (
    <Contenedor>
      <div>

        <Imagen
          src = {imagen}
          alt = "imagen crypto"
        />

      </div>
      <div>

        <Heading>
          Cotiza Critomonedas al instante
        </Heading>

        <Formulario
          setMonedaApp = {setMonedaApp}
          setCriptomoneda = {setCriptomoneda}
        />

        {componente}

      </div>
    </Contenedor>
  );
}

export default App;
