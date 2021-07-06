import React from 'react';
import Navbar from './Navbar';
import fondo from '../assets/HOME/Hero/hero-home-01.png';
import arrow from '../assets/HOME/Artes Servicios/arrow1.png';
import disign from '../assets/HOME/Artes Servicios/diseño.jpg';
import Projects from './Projects';
import Team from './Team';

const Header = () => {
    return (
        <div className="container-fluid">
            <Navbar />
            <img id="logo" src={fondo} alt="fondo" />
            <div id="title">
                <p className="slogan-text mb-0 mr-5 pr-5">dinkibit es un Equipo creativo</p>
                <h1 id="slogan-title">Hacemos cosas <br /> Increíbles</h1>
                <img id="arrow" src={arrow} alt="arrow" />
                <span id="arrow-text">scroll</span>
            </div>
            <div id="cards">
                <div className="card text-white bg-dark mb-3">
                    <img id="disign-img" src={disign} alt="diseño" />
                    <div className="card-header my-4">¿Qué hacemos?</div>
                    <div className="card-body pb-5">
                        <h1 className="card-title mb-3">Diseño</h1>
                        <div id="services">
                            <p className="services">Diseño</p>
                            <hr id="line"></hr>
                            <span className="services" id="develop">Desarrollo</span>
                            <hr id="lines"></hr>
                            <span className="services" id="marketing">Marketing</span>
                        </div>
                        <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu eiusmo sed do eiusmod tempor incididunt.</p>
                        <button type="button" className="btn btn-dark">Ver más<img id="btn-image" src={arrow} alt="arrow" /></button>
                    </div>
                </div>
            </div>
            <Projects />
            <Team />
        </div>
    );
}

export default Header;