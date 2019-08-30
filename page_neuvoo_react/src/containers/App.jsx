/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navegacion from '../components/Navegacion'
import NavBar from '../components/NavBar'
import Cap1 from '../pages/Capitulo1/Capitulo1'
import Que_Somos from '../pages/Capitulo1/Que_Somos'
import Como_Buscar from '../pages/Capitulo1/Como_Buscar'
import Como_Se_Muestran_Resultados from '../pages/Capitulo1/Como_Se_Muestran_Resultados'
import Estructura from '../pages/Capitulo1/Estructura'
import Tecnicas from '../pages/Capitulo1/Tecnicas'
import Main from '../components/Main';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Main>
                <NavBar/>
                <div className="row">
                <Navegacion/>
                <Route exact path ='/Capitulo-I' component={Cap1}  />
                <Route exact path ='/Capitulo-I/Qué-somos' component={Que_Somos}/>
                <Route exact path ='/Capitulo-I/Como-se-busca' component={Como_Buscar}/>
                <Route exact path ='/Capitulo-I/Como_Se_Muestran_Resultados' component={Como_Se_Muestran_Resultados}/>
                <Route exact path ='/Capitulo-I/Estructura' component={Estructura}/>
                <Route exact path ='/Capitulo-I/Técnicas' component={Tecnicas}/>
                

                </div>

                </Main>
            </Switch>
        </BrowserRouter>
    );
}

export default App;