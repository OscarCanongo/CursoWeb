import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/authentication/Login';
import NuevaCuenta from './components/authentication/NuevaCuenta';
import Ranchos from './components/ranchos/Ranchos';
import RanchoState from './context/ranchos/ProyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';

//Revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {

  return (
    <RanchoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path = "/" component = {Login}/>
                <Route exact path = "/nueva-cuenta" component = {NuevaCuenta}/>
                <RutaPrivada exact path = "/rancho" component = {Ranchos}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </RanchoState>
  );
}

export default App;
