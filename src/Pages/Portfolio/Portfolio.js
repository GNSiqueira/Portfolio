import React from "react";
import './Portfolio.css';
import NavBar from "../../Components/NavBar/NavBar";
import ProjetoIntegrador from "../../assets/Portifolio/projetointegrador.png"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <NavBar />
            <main>
               <section>
                    <div className="card">
                        <a href="/test"><img src={ProjetoIntegrador} alt=""/></a>
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
