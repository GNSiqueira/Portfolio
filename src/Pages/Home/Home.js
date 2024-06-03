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
                        <div>
                            <h3>Meu nome é Gabriel Neto e,</h3>
                            <h2>SOU PROGRAMADOR.</h2>
                            <p>Seja bem-vindo ao meu portifólio website!</p>
                            <a><button>Saiba mais sobre mim!</button></a>
                        </div>
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