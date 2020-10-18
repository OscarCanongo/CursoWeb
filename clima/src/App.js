import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Clima from './components/Clima';
import Error from './components/Error';

function App() {

  //State del formulario
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  //Extraer ciudad y pais
  const {ciudad, pais} = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = '8e079482ec68fe1f700cee799cf49dbe';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const api = await fetch(url)
        .then(res => res.json());
        setResultado(api);
        setConsultar(false);
        //Detecta si se encuentra la ciudad en la consulta
        if (api.cod === "404") {
          setError(true);
        } else{
          setError(false);
        }      
      }
    }
    consultarAPI();
    //eslint-disable-next-line
  }, [consultar])

  let componente;
  if(error) {
    componente = <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima 
                    resultado={resultado}
                 />
  }

  return (
    <Fragment>
      <Header
        titulo = 'Clima'
      />
      <div className = "contenedor-form">
        <div className = "container">
          <div className = "row">
            <div className = "col m6 s12">
              <Formulario
                busqueda = {busqueda}
                setBusqueda = {setBusqueda}
                setConsultar = {setConsultar}
              />
            </div>
            <div className = "col m6 s12">
              {componente}
            </div>      
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
