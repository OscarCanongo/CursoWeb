import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
import logo from './logo.svg';

const Contenedor = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Imagen = styled.img`
  display:block;
  margin:auto;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #ff9aa2 0%, #ffb7b2 40%, #ffdac1 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .38 ease;

  :hover {
    cursor: pointer;
    background-size: 400;
  }
`;

function App() {
  
  //State de frases
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
    .then(res => res.json());
    setFrase(api);
  }

  //Cargar una frase
  useEffect(() => {
    consultarAPI();
  }, [])

  return (
    <Contenedor>
      <div margin-top>
        <Imagen src={logo} width="50%"/>
      </div>
      <Frase
        frase = {frase}
      />
      <Boton onClick = {consultarAPI}>
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
