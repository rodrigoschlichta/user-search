import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';


const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <div className="home-text">
                <h1 className="text-title">Desafio do Capítulo 3,<br/> Bootcamp DevSuperior</h1>
                <p className="text-subtitle">
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br/>
                <br/>Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br/><br/>
                Este design foi adaptado a partir de Ant Design System for Figma,<br/>
                de Mateusz Wierzbicki: <a href="http://gmail.com"> antforfigma@gmail.com</a><br/><br/>
                </p>
            </div>
    
        </div>
        <div className="btn-home">
                <Link to="/search">
                 <Button text= "Começar" />   
                </Link>   
        </div>
    </div>
);

export default Home;