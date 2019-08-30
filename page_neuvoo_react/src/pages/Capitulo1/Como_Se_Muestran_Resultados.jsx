import React, { Component } from 'react'
import Neuvoo_results from '../images/neuvoo_search_results.png'
import '../styles/Cap1.css'
export class Como_Se_Muestran_Resultados extends Component {
    render() {
        return ( 
        <div className=" main-content-inner col-sm-12 col-md-8 container ">
            <div className="container">
                <strong><h2>¿Como Se Muestran Resultados?</h2></strong>
                    <div className="container card mt-3">
                        <div className="container">
                        <h3 className="mt-4">¿Como Se Muestran Resultados?</h3>
                            <div className="container mt-4">
                            <p>
                            Nuestro buscador, debe proveer al usuario, los datos más relevantes de los puestos de trabajo,
                            para que de esta forma, establezca criterios de búsqueda considerando sus necesidades: ubicación, rama de estudio, 
                            habilidades, entre otras. Como por ejemplo:
                                <ul>
                                    <li>Nombre de la Empresa (<b className="text-primary">Empname</b>) Nombre o referencia legal de la empresa que oferta el trabajo (job).</li>
                                    <li>Título (<b className="text-primary">Title</b>) Título o cargo a ofrecer por el puesto de trabajo.</li>
                                    <li>Ubicación (<b className="text-primary">Location</b>)Ubicación del puesto de trabajo: Ciudad, Estado, País.</li>
                                    <li>Enlace al Job (<b className="text-primary">Url</b>) Ruta de acceso para aplicar al trabajo.</li>
                                    <li>Descripción del Job (<b className="text-primary">Job Data</b>)Especificaciones, descripción, habilidades y demás requerimientos para aplicar al trabajo. </li>
                                    <li>Logo (<b className="text-primary">Logo de la empresa</b>)Logotipo o imagen referencial a la empresa que oferta el trabajo. </li>
                                </ul>
                                <br/><br/>
                                    <div className="container Info_img_cap1_site">
                                        <img className="Info_img_cap1_site" src={Neuvoo_results} alt="neuvo_site"/>
                                    </div>     
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }
}

export default Como_Se_Muestran_Resultados
