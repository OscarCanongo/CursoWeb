import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';
import Cancion from './components/Cancion'
import Info from './components/Info'

function App() {

  //DefinirState
  const[busquedaLetra, setBusquedaLetra] = useState ({});
  const[letra, setLetra] = useState('');
  const[info, setInfo] = useState ({});
  const[error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) {
      return
    }

    const consutarApiLetra = async () => {
      const {artista, cancion} = busquedaLetra;
      
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${busquedaLetra.artista}`;

       try { const [letra, info] = await Promise.all([
              axios.get(url),
              axios.get(url2)
             ]) 
             setError(false);
             setLetra(letra.data.lyrics);
             setInfo(info.data.artists[0]);
             setBusquedaLetra({});
            } catch(error){
              setError(true);
            }
    }

    consutarApiLetra()
  }, [busquedaLetra, info])

  return (
    <Fragment>
      <Formulario
        setBusquedaLetra = {setBusquedaLetra}
      />
      { error
        ? <p className = "alert alert-danger text-center p-2">Cancion no encontrada :c</p>
        : <div className="container mt-5">
            <div className = "row">
              <div className = "col-md-6">
                <Info
                  info = {info}
                />
              </div>
              <div className = "col-md-6">
                <Cancion 
                  letra = {letra}
                />
              </div>
            </div>
          </div> 
      }
    </Fragment>    
  );
}

export default App;
