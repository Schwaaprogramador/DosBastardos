//-------------IMPORTANCIONES----------
//---Dependencias---------------
import { Route } from 'react-router-dom';

//---Componentes----------------
import LandingPage from "./componentes/LandingPage/LandingPage.jsx";
import Home from './componentes/Home/Home.jsx';
import FormRegistro from './componentes/FormRegistro/FormRegistro.jsx';
import styled from './App.css';
import Escritos from './componentes/Escritos/Escritos.jsx';

//---Render Componente---------
function App() {
  return (<div className={styled.app}>

         

            <Route exact path="/" >
              <LandingPage/>
            </Route>


            <Route exact path="/home" >
              <Home/>
            </Route>

            <Route exact path="/escritos" >
              <Escritos/>
            </Route>


            <Route path="/form-registro"  component={FormRegistro}/>




          
            

          </div>);
}

export default App;
