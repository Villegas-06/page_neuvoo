import React, { Component } from 'react'
import Neuvoo_site from '../images/neuvoo_site.png'
import Neuvoo_results from '../images/neuvoo_search_results.png'
import Neuvoo_grafica from '../images/neuvoo_grafica.png'
import '../styles/Cap1.css'
export class Info_Cards extends Component {
    render() {
        return (
            <div className=" main-content-inner col-sm-12 col-md-8 container ">
                <div className="container">
                    <strong><h2>Capítulo I</h2></strong>
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
                        <div className="container card mt-3">
                                    <div className="container">
                                    <h3 className="mt-4">¿Cómo se busca?</h3>
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
                        <div className="container card mt-3">
                                    <div className="container">
                                    <h3 className="mt-4">¿Cómo se muestran los resultados, y que nos interesa de ellos?</h3>
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

                                        <div className="container Info_img_cap1_site">
                                                <img className="Info_img_cap1_site" src={Neuvoo_grafica} alt="neuvo_site"/>
                                            </div>  

                                </div>                               
                            </div>
                        </div>

                        <div className="container card mt-3">
                                    <div className="container">
                                    <h3 className="mt-4">Técnicas para el impulso de ventas</h3>
                                        <div className="container mt-4">
                                            <p>
                                                <b className="text-primary">Link Building: </b>
                                                Funciona como una estrategia, en la cual el departamento de operaciones se pone en contacto con empresas,
                                                universidades, periódicos, etc; para solicitarle incluir un enlace apuntando a nuestro buscador en sus 
                                                páginas webs, de manera que podamos aumentar las posibilidades de acceso y tráfico a la pagina.
                                            </p>
                                            <br/>

                                            <p>
                                                <b className="text-primary">EVE:</b>
                                                EVE es un sistema de generación de textos a partir de plantillas. Se utiliza para crear documentos HTML 
                                                enriquecidos en términos de SEO (Search Engine Optimization) y como estrategia de “internal-linking”. 
                                                Cada documento generado por EVE está enlazado con algún otro documento en el mismo país y en el mismo idioma. 
                                                Esto sumado a link-building completa la estrategia SEO de neuvoo, lo que nos permite posicionarnos mucho mejor
                                                en las búsquedas de google.
                                            </p>
                                            <br/>

                                            <p>
                                                <b className="text-primary">PPC (Pay Per Click):</b>
                                                Funciona como un modelo de publicidad, en el que el cliente paga al anunciante una tarifa, basada en el número de 
                                                clicks que se realicen a un anuncio específico.
                                            </p>
                                            <br/>
                                            
                                            <p>
                                                <b className="text-primary">ATS (Applicant Tracking System):</b>
                                                Es una aplicación de software que permite la gestión electrónica de las necesidades de contratación. Se puede implementar 
                                                 acceder en línea en una empresa, en función de las necesidades de la misma. Un ATS es muy similar a la gestión de relaciones 
                                                 con clientes (CRM), pero están diseñados para fines de seguimiento de contratación. En muchos casos se filtran aplicaciones 
                                                 automáticamente en función de criterios dados tales como palabras clave, las habilidades, los patrones anteriores, años de 
                                                 experiencia y escuelas frecuentadas. Es utilizado como una herramienta de impulso de ventas que permite optimizar los motores de búsqueda.
                                            </p>
                                            <br/><br/>
                                </div>                             
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Info_Cards
