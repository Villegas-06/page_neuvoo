/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import Neuvoo_logo from '../pages/images/neuvoo-logo-page.png'
import '../pages/styles/Navegacion.css'
export class Navegacion extends Component {
    render() {
        return (
                    <div className="container col-sm-12 col-md-3 card">
                    <div className="container Navegacion_img">
                        <img  href="/"  className="Navegacion_img" src={Neuvoo_logo} alt="neuvoo"/>
                    </div>
                    <br/>
                    <div className="container-fluid Navegacion_img ">
                        <input className="search_input Navegacion" type="text" name="" placeholder="Buscar..."/>
                        <a href="/" className="search_icon btn btn-primary mb-1 Navegacion_search"><i className="fas fa-search"></i></a>
                    </div>
                    <br/>
                    <div className="container">
                       <strong> Categorías </strong>
                    </div>
                    <br/>
                    <div className="container">
                    <i className="far fa-folder-open"></i> <a href="/Capitulo-I" className="text-dark"> Capítulo I</a>
                        <div className="container mt-1">
                        <i className="far fa-folder-open"></i> <a href="/Capitulo-I/Qué-somos" className="text-dark">¿Qué somos y qué hacemos?</a>
                        </div>
                        <div className="container mt-1">
                        <i className="far fa-folder-open"></i> <a href="/Capitulo-I/Como-se-busca" className="text-dark">¿Cómo se busca?</a>
                        </div>
                        <div className="container mt-1">
                        <i className="far fa-folder-open"></i> <a href="/Capitulo-I/Como_Se_Muestran_Resultados" className="text-dark">¿Cómo se muestran los resultados, y que nos interesa de ellos?</a>
                        </div>
                        <div className="container mt-1">
                        <i className="far fa-folder-open"></i> <a href="/Capitulo-I/Estructura" className="text-dark">Estructura de Neuvoo</a>
                        </div>
                        <div className="container mt-1">
                        <i className="far fa-folder-open"></i> <a href="/Capitulo-I/Técnicas" className="text-dark">Técnicas para el impulso de ventas</a>
                        </div>
                    </div>
                    <hr className="Navegacion_hr"/>
                    <hr/>
                    <div className="container">
                    <i className="far fa-folder-open"></i> <a href="#" className="text-dark">Capítulo II</a>
                        <div className="container mt-1">
                            <i className="far fa-folder-open"></i> <a href="#" className="text-dark">Servidores</a>
                        </div>
                        <div className="container mt-1">
                            <i className="far fa-folder-open"></i> <a href="#" className="text-dark">Dashboard</a>
                        </div>
                        <div className="container mt-1">
                            <i className="far fa-folder-open"></i> <a href="#" className="text-dark">Aplicaciones</a>
                        </div>
                    </div>
                    <hr/>
                    <hr/>
                </div>
        );
    }
}


export default Navegacion
