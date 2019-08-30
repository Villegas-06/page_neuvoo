import React, { Component } from 'react'
import '../styles/Cap1.css'
export class Que_Somos extends Component {
    render() {
        return ( 

<div className=" main-content-inner col-sm-12 col-md-8 container ">
<div className="container">
    <strong><h2>¿Qué somos y qué hacemos?</h2></strong>
        <div className="container card mt-3">
        <div className="container">
        <h3 className="mt-4">¿Qué somos y qué hacemos?</h3>
            <div className="container mt-4">
                <p> 
                <b className="text-primary">Neuvoo,</b> es un motor de búsqueda en el área de empleos con sus sedes principales en Montreal y Suiza,
                actualmente presente en más de 60 países. En el se agrupan todas las ofertas de empleo disponibles
                en las páginas web de las empresas, bolsas de empleo locales, blogs, universidades y periódicos. Básicamente,
                brindamos a los usuarios acceso a todas las vacantes de empleo disponibles en un solo lugar:
                <a href="https://neuvoo.com/" className="text-primary">Neuvoo</a>
                </p>

                <p>
                    Todos los puestos de trabajo, llegan a nuestro portal, 
                    a través del uso de tecnologías informáticas que nos permiten 
                    gestionar y almacenar el contenido informativo más relevante para el usuario, como lo son:
                </p>
                <br/>

                <p>
                    <b className="text-primary">Data Mining,</b> consiste en extraer información de un conjunto de datos y transformarla
                    en una estructura comprensible para su uso posterior. Además de la etapa de análisis en bruto, que involucra aspectos
                    de bases, procesamiento y de gestión de datos, entre otras. El término es frecuentemente utilizado para referirse a 
                    cualquier forma de procesamiento de la información (recolección, extracción, almacenamiento, análisis y estadísticas).
                </p>
                <br/>

                <p>
                    <b className="text-primary">Web Scraping,</b> es una técnica utilizada mediante programas de software para extraer información de sitios web.
                     Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el protocolo HTTP manualmente,
                      o incrustando un navegador en una aplicación. Está muy relacionado con la indexación de la web, la cual recopila la información 
                      utilizando un robot. Es una técnica universal adoptada por la mayoría de los motores de búsqueda. Alguno de los usos del web scraping,
                      se da para obtener información relevante de un sitio, como por ejemplo: posiciones de trabajo.
                </p>
                <br/>

                <p>
                    <b className="text-primary">Spider/Crawler,</b> es un programa que inspecciona las páginas web de forma metódica y automatizada,
                     siguiendo un conjunto de instrucciones previamente especificado en código.  Los spiders, suelen ser bots y entre sus tareas más 
                     comunes tenemos:
                     <ul>
                         <li>Crear el índice de una máquina de búsqueda.</li>
                         <li>Analizar los enlaces de un sitio para buscar links rotos.</li>
                         <li>Recolectar información de un cierto tipo, como por ejemplo: puestos de trabajo.</li>
                     </ul>
                        Los buscadores más populares de internet hacen uso de esta herramienta para indexar las páginas a sus servidores.
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

export default Que_Somos
