import React, { Component } from 'react'
import '../styles/Cap1.css'

export class Estructura extends Component {
    render() {
        return (
            <div className=" main-content-inner col-sm-12 col-md-8 container ">
                <div className="container">
                    <strong><h2>Estructura de Neuvoo</h2></strong>
                        <div className="container card mt-3">
                            <div className="container">
                            <h3 className="mt-4">Estructura de Neuvoo</h3>
                                <div className="container mt-4">
                                <p>
                                            La estructura de Neuvoo, se divide en 4 grandes grupos, en cada uno de ellos y sus correspondientes
                                            divisiones yace una parte importante tanto del funcionamiento como del mantenimiento de nuestro buscador,
                                            los cuales en conjunto conforman lo que hoy somos. Estos departamentos se distribuyen de la siguiente manera:
                                        </p>
                                        <br/>

                                        <p>
                                            <b className="text-primary">Administration & Human Resources (Administración & Recursos Humanos):</b>
                                             Además de cumplir con todas las funciones administrativas (nómina, proveedores, facturación, pagos, etc) 
                                             este departamento permanece en constante comunicación con nuestros clientes (PPC y/o ATS), 
                                             para los cuales se realiza facturación especial, prestando atención/soporte en distintos idiomas para el 
                                             cálculo de impuestos o cambio de moneda, ya que contamos con clientes en todo el mundo y con diferentes 
                                             planes/tarifas, además de llevar el control administrativo de todo el personal que labora en las distintas 
                                             sedes de Neuvoo en el mundo.
                                        </p>
                                        <br/>

                                        <p>
                                            <b className="text-primary">Content & Operations (Contenido & Operaciones):</b>
                                            El departamento de Contenido & Operaciones a través de la fusión entre Indexers y Country Managers,
                                            se encarga (por parte de los Indexers) de toda la gestión, programación, mantenimiento e incorporación
                                            de nuevo contenido laboral para nuestro buscador, en todas las zonas (países) donde Neuvoo se encuentra
                                            aperturado y (por parte de los Country Managers) de la asignación, búsqueda y evaluación del contenido 
                                            laboral más importante y conocido de su país; a la vez navegar y reportar errores, aportando todo su conocimiento
                                            en el manejo del mercado, a fin de atraer la mayor cantidad de tráfico y visitas a nuestro protal, a través de la 
                                            integración y ejecución de  tecnologías tales como: Link Building.
                                        </p>
                                        <br/>

                                        <p>
                                            <b className="text-primary">Research & Development (Intesvigación & Desarrollo):</b>
                                            Se encarga de perfeccionar e idear nuevas tencologías para potenciar el crecimiento y
                                            reconocimiento de nuestro buscador, además de programar y controlar muchos de los procesos 
                                            de backend que se encargan de la gestión, consulta y almacenamiento de la información en nuestras
                                            bases de datos, también trabaja en conjunto con el departamento de Contenido & Operaciones, para 
                                            perfeccionar y optimizar constantemente tanto la plataforma como los procesos de indexación.
                                        </p>
                                        <br/>

                                        <p>
                                            <b className="text-primary">Sales (Ventas):</b>
                                            Se encarga de contactar a clientes (empresas, periódicos, agencias de reclutamiento, etc) para ofrecer 
                                            diferentes servicios de publicación, impulsar el reconocimiento de sus ofertas de empleo y satisfacer 
                                            las necesidades específicas que requieren sus vacantes, a través del uso de técnicas y herramientas 
                                            tecnológicas específicas para tal fin.
                                        </p>
                                        <hr/><br/>


                                </div>                             
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Estructura
