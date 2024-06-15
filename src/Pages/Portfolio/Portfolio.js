import React from "react";
import './Portfolio.css';
import NavBar from "../../Components/NavBar/NavBar";
import ProjetoIntegrador from "../../assets/Portifolio/projetointegrador.png"
import IconeProjetoIntegrador from "../../assets/Portifolio/projeto-intregrador-icone.png"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <NavBar />
            <main>
               <section>
                    <div className="card">
                        <a href="/projeto"><img src={ProjetoIntegrador} alt="Projeto Integrador"/>
                        </a>
                        <img src={IconeProjetoIntegrador}/>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div><div className="card">
                        <a href=""><img src="https://picsum.photos/800" alt=""/></a>
                    </div>
                </section> 
            </main>
            
        </div>
    );
}
