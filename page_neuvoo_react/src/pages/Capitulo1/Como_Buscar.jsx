import React, { Component } from 'react'
import Neuvoo_site from '../images/neuvoo_site.png'
import '../styles/Cap1.css'

export class Como_Buscar extends Component {
    render() {
        return (
            <div className=" main-content-inner col-sm-12 col-md-8 container ">
                <div className="container">
                    <strong><h2>¿Cómo se Busca?</h2></strong>
                        <div className="container card mt-3">
                            <div className="container">
                            <h3 className="mt-4">¿Cómo se Busca?</h3>
                                <div className="container mt-4">
                                <p>
                                    Neuvoo, provee al usuario de una interfaz web con todos los filtros necesarios para refinar 
                                    su búsqueda de empleo, en un solo lugar. 
                                    <a href="http://neuvoo.com"> http://neuvoo.com</a>
                                    <br/> <br/> <hr/>
                                    <div className="container Info_img_cap1_site">
                                        <img className="Info_img_cap1_site" src={Neuvoo_site} alt="neuvo_site"/>
                                    </div>                                            
                                </p>
                                 <br/>

                                </div>                             
                            </div>
                        </div>
                </div>
            </div>

        )
    }
}

export default Como_Buscar
