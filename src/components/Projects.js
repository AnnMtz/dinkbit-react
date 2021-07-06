import React from 'react';
import bull from '../assets/HOME/Artes Servicios/bull&tank.jfif';
import divya from '../assets/HOME/Artes Servicios/divya.jfif';
import thefit from '../assets/HOME/Artes Servicios/thefit.jfif';
import refly from '../assets/HOME/Artes Servicios/refly.jfif';
import pakmal from '../assets/HOME/Artes Servicios/pakmal.jfif';
import arrow from '../assets/HOME/Artes Servicios/arrow1.png';
import jose from '../assets/HOME/Equipo/jose-salame.svg'

const Projects = () => {
    return (
        <div id="projects-view">

            {/* <div className="card-columns">
                <div className="card mb-0 border-0">
                    <div className="card-body">
                        <h5 className="card-title">Proyectos</h5>
                        <p className="card-text-1">Lucen <br /> increíble,<br /> funcionan <br /> increíble</p>
                    </div>
                </div>
                <div className="card border-0">
                    <img src={divya} class="card-img-top" alt="divya" />
                    <blockquote className="blockquote mb-0 card-body">
                        <p className="text-cards">Diseño y Desarrollo Web - México</p>
                        <h1>Divya</h1>
                    </blockquote>
                </div>
                <div>
                    <button type="button" class="btn btn-primary">Ver más proyectos</button>
                </div>

                <div className="card border-0">
                    <img src={bull} class="card-img-top" alt="bull-tank" />
                    <div className="card-body">
                        <p className="text-cards">Diseño y Desarrollo Web - México</p>
                        <h1>Bull & Tank</h1>
                    </div>
                </div>
                <div className="card text-white p-3 border-0">
                    <img src={refly} class="card-img-top" alt="bull-tank" />
                    <blockquote className="blockquote mb-0 card-body">
                        <p className="text-cards">Diseño y Desarrollo Web, Branding - México</p>
                        <h1 id="bull-text">Refly</h1>
                    </blockquote>
                </div>
                <div className="card border-0">
                    <img src={thefit} class="card-img-top" alt="bull-tank" />
                    <div className="card-body">
                        <p className="text-cards">Diseño y Desarrollo Web, Branding - México</p>
                        <h1 id="bull-text">The Fit Pilates</h1>
                    </div>
                </div>
                <div className="card border-0">
                    <img src={pakmal} class="card-img-top" alt="pakmail" />
                    <div className="card-body">
                        <p className="text-cards">Diseño y Estrategia de Redes Sociales - México</p>
                        <h1 id="bull-text">Pakmail</h1>
                    </div>
                </div>
                <div className="card p-3 d-none">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div className="card d-none">
                </div>
            </div>
            <div className="card mb-3 bg-dark">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <p className="name ml-5 mb-0 mt-5">José Saleme</p>
                        <p className="name ml-5 mb-0">CEO</p>
                        <img id="team-img" src={jose} class="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title" id="ceo">Un poco de nosotros</h5>
                            <p className="card-text" id="description">Somos un equipo de creativos, diseñadores, desarrolladores, mercadólogos y creadores de contenido que trabajan para hacer de tu marca, algo increíble.</p>
                            <button type="button" class="btn btn-dark">Ver más</button>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="cards-img" className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                            <div className="card-body">
                                <h3 className="card-title">Proyectos</h3>
                                <h1 id="projects-card-text1" className="card-text">Lucen increíble, funcionan increíble</h1>
                            </div>
                            
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={bull} className="card-img-top" alt="bull"/>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={divya} className="card-img-top" alt="divya"/>
                            <div className="card-body1">
                                <h3 className="card-title1 mt-4">Diseño y Desarrollo Web - México</h3>
                                <h1 className="card-text">Divya</h1>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card1 h-100">
                        <div id="card-body1" className="card-body">
                            <h3 className="card-title1">Diseño y Desarrollo Web - México</h3>
                            <h1 className="card-text">Bull & Tank</h1>
                        </div>
                        <img src={refly} className="card-img-top" alt="refly"/>
                    </div>
                </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={thefit} className="card-img-top" alt="..."/>
                                <div className="card-body6">
                                    <h3 className="card-title1">Diseño y Desarrollo Web, Branding - México</h3>
                                    <h1 className="card-text1">The Fit Pilates</h1>
                                </div>
                                <div className="card-footer w-100">
                                    <button id="card-button"><a id="text-button">Ver más proyectos<img src={arrow} id="arrow2" alt="arrow" /></a></button>
                                </div>
                        </div>
                    </div>
                        <div className="col">
                            <div className="card h-100">
                                <div className="card-body2">
                                    <h3 className="card-title1">Diseño y Desarrollo Web, Branding - México</h3>
                                    <h1 className="card-text1">Refly</h1>
                                </div>
                                <img src={pakmal} className="card-img-top" alt="pakmal"/>
                                    <div className="card-body4">
                                        <h3 className="card-title1">Diseño y Estrategia de Redes Sociales - México</h3>
                                        <h1 className="card-text1">Pakmail</h1>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
    );
}

export default Projects;