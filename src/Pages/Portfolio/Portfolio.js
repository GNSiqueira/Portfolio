import React from "react";
import './Portfolio.css';
import NavBar from "../../Components/NavBar/NavBar";

import ProjetoIntegrador from "../../assets/Portifolio/ProjetoIntegrador/projeto-integrador.png"
import IconeProjetoIntegrador from "../../assets/Portifolio/ProjetoIntegrador/projeto-intregrador-icone.png"
import EstruturaDeDados from "../../assets/Portifolio/EstruturaDeDados/estrutura-de-dados.png"
import IconeEstruturaDeDados from "../../assets/Portifolio/EstruturaDeDados/icone-estrutura-de-dados.png"
import Programacao from "../../assets/Portifolio/Programacao/programacao.png"
import IconeProgramacao from "../../assets/Portifolio/Programacao/icone-programacao.png"
import ProgramacaoWeb from "../../assets/Portifolio/ProgramacaoWeb/programacao-web.png"
import IconeProgramacaoWeb from "../../assets/Portifolio/ProgramacaoWeb/icone-programacao-web.png"
import MetodologiasAgeis from "../../assets/Portifolio/MetodologiasAgeis/metodologias-ageis.png"
import IconeMetodologiasAgeis from "../../assets/Portifolio/MetodologiasAgeis/icone-metodologias-ageis.png"
import BancoDeDados from "../../assets/Portifolio/BancoDeDados/banco-de-dados.png"
import IconeBancoDeDados from "../../assets/Portifolio/BancoDeDados/icone-banco-de-dados.png"
import SistemasOperacionais from "../../assets/Portifolio/SistemasOperacionais/sistemas-operacionais.png"
import IconeSistemasOperacionais from "../../assets/Portifolio/SistemasOperacionais/icone-sistemas-operacionais.png"
import EngenhariaDeSoftware from "../../assets/Portifolio/EngenhariaDeSoftware/engenharia-de-software.png"
import IconeEngenhariaDeSoftware from "../../assets/Portifolio/EngenhariaDeSoftware/icone-engenharia-de-software.png"
import InteracaoHumanoComputador from "../../assets/Portifolio/InteracaoHumanoComputador/interacao-humano-computador.png"
import IconeInteracaoHumanoComputador from "../../assets/Portifolio/InteracaoHumanoComputador/icone-interacao-humano-computador.png"
import Empreendedorismo from "../../assets/Portifolio/Empreendedorismo/empreendedorismo.png"
import IconeEmpreendedorismo from "../../assets/Portifolio/Empreendedorismo/icone-empreendedorismo.png"
import MatematicaDiscreta from "../../assets/Portifolio/MatematicaDiscreta/matematica-discreta.png"
import IconeMatematicaDiscreta from "../../assets/Portifolio/MatematicaDiscreta/icone-matematica-discreta.png"
import Ingles from "../../assets/Portifolio/Ingles/ingles.png"
import IconeIngles from "../../assets/Portifolio/Ingles/icone-ingles.png"

export default function Portfolio() {
    return (
        <div className="portfolio">
            <NavBar />
            <main>
               <section>
                    {/* Projeto Integrador */}
                    <div className="card">
                        <a href="/projeto">
                            <img src={ProjetoIntegrador} alt="Projeto Integrador"/>
                            <img className="icone" src={IconeProjetoIntegrador}/>
                            <span>Projeto Integrador</span>
                        </a>
                    </div>
                    
                    {/* Estrutura de Dados */}
                    <div className="card">
                        <a href="/estrutura">
                            <img src={EstruturaDeDados} alt="Estrutura de Dados"/>
                            <img className="icone" src={IconeEstruturaDeDados} alt="Icone de estrutura de dados"/>
                            <span>Estrutura de Dados</span>
                        </a>
                    </div>
                    
                    {/* Tecnicas Avançadas de programação */}
                    <div className="card">
                        <a href="/programacao">
                            <img src={Programacao} alt="Tecnicas Avançadas de Programacao"/>
                            <img className="icone" src={IconeProgramacao} alt="Icone Tecnicas Avançadas de Programacao"/>
                            <span>Tecnicas Avançadas de programação</span>
                        </a>
                    </div>
                    
                    {/* Tecnicas Avançadas de programação web */}
                    <div className="card">
                        <a href="/programacaoweb">
                            <img src={ProgramacaoWeb} alt="Tecnicas Avançadas de Programacao Web"/>
                            <img className="icone" src={IconeProgramacaoWeb} alt="Icone Tecnicas Avançadas de Programacao Web"/>
                            <span>Tecnicas Avançadas de Programação Web</span>
                        </a>
                    </div>
                    
                    {/* Metodologias Ageis */}
                    <div className="card">
                        <a href="/metodologias">
                            <img src={MetodologiasAgeis} alt="Metodologias Ageis"/>
                            <img className="icone" src={IconeMetodologiasAgeis} alt="Icone Metodologias Ageis"/>
                            <span>Metodologias Ageis</span>
                        </a>
                    </div>
                    
                    {/* Banco de dados */}
                    <div className="card">
                        <a href="/banco">
                            <img src={BancoDeDados} alt="Bando de dados"/>
                            <img className="icone" src={IconeBancoDeDados} alt="Icone banco de dados"/>
                            <span>Banco de Dados</span>
                        </a>
                    </div>
                    
                    {/* Sistemas Operacionais */}
                    <div className="card">
                        <a href="/sistemas">
                            <img src={SistemasOperacionais} alt="Sistemas Operacionais"/>
                            <img className="icone" src={IconeSistemasOperacionais} alt="Icone Sistemas Operacionais"/>
                            <span>Sistemas Operacionais</span>
                        </a>
                    </div>
                    
                    {/* Emgenharia de Software */}
                    <div className="card">
                        <a href="/engenharia">
                            <img src={EngenhariaDeSoftware} alt="Engenharia de Software"/>
                            <img className="icone" src={IconeEngenhariaDeSoftware} alt="Icone Engenharia de Software"/>
                            <span>Engenharia de Software</span>
                        </a>
                    </div>
                    
                    {/* Interação Humano e Computador */}
                    <div className="card">
                        <a href="/ihc">
                            <img src={InteracaoHumanoComputador} alt="Interação Humano e Computador"/>
                            <img className="icone" src={IconeInteracaoHumanoComputador} alt="Icone Interação Humano e Computador"/>
                            <span>Interação Humano e Computador</span>
                        </a>
                    </div>
                    
                    {/* Empreendedorismo */}
                    <div className="card">
                        <a href="/empreendedorismo">
                            <img src={Empreendedorismo} alt="Empreendedorismo"/>
                            <img className="icone" src={IconeEmpreendedorismo} alt="Icone Empreendedorismo"/>
                            <span>Empreendedorismo</span>
                        </a>
                    </div>
                    
                    {/* Matemática Discreta */}
                    <div className="card">
                        <a href="/matematica">
                            <img src={MatematicaDiscreta} alt="Matemática Discreta"/>
                            <img className="icone" src={IconeMatematicaDiscreta} alt="Icone Matemática Discreta"/>
                            <span>Matemática Discreta</span>
                        </a>
                    </div>
                    
                    {/* Ingles */}
                    <div className="card">
                        <a href="/ingles">
                            <img src={Ingles} alt="Ingles"/>
                            <img className="icone" src={IconeIngles} alt="Icone Ingles"/>
                            <span>Ingles</span>
                        </a>
                    </div>
                </section> 
            </main>
            
        </div>
    );
}
/**/