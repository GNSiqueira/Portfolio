import React from "react";
import './Home.css'
import NavBar from '../../Components/NavBar/NavBar'
import logo from '../../assets/foto-rosto.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkeding.png'
import instagram from '../../assets/instagram.png'

export default function Home() {
    return(
        <div className="body">
            <NavBar/>
            <div className="content">
                <section className="container">
                    <div className="escrita">
                            <span>Olá, seja bem-vindo</span>
                            <h2><span>BACK-END  </span>   DEVELOPER</h2>
                            <p>Desenvolvo soluções de backend sob medida para impulsionar a performance e a eficiência de sua aplicação. Com expertise em tecnologias de ponta, transformo conceitos em códigos robustos e escaláveis, garantindo uma base sólida para o sucesso de seu projeto. Confie em minha experiência para levar sua empresa além do esperado no mundo digital.</p>
                            <a href="#"><button className="botao">Entre em contato!</button></a>
                            <div className="icones">
                                <a href="#"><img src={github} alt="github"/></a>
                                <a href="#"><img src={linkedin} alt="linkedin"/></a>
                                <a href="#"><img src={instagram} alt="instagram"/></a>
                            </div>
                    </div>
                </section>
                <section className="foto">
                    <img src={logo} alt="Minha foto"/>
                </section> 
            </div>
        </div>
    );
}