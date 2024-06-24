import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Pages/Home/Home.js';
import Portfolio from './Pages/Portfolio/Portfolio.js';
import About from './Pages/About/About.js';
import ProjetoIntegrador from './Pages/Portfolio/Materias/ProjetoIntegrador.js';
import EstruturaDeDados from './Pages/Portfolio/Materias/EstruturaDeDados.js';
import TecnAvancadasProgramacao from './Pages/Portfolio/Materias/TecnAvancadasProgramacao.js';
import TecnAvancadasWeb from './Pages/Portfolio/Materias/TecnAvancadasWeb.js';
import MetodologiasAgeis from './Pages/Portfolio/Materias/MetodologiasAgeis.js';
import BancoDeDados from './Pages/Portfolio/Materias/BancoDeDados.js';
import SistemasOperacionais from './Pages/Portfolio/Materias/SistemasOperacionais.js';
import EngenhariaSoftware from './Pages/Portfolio/Materias/EngenhariaDeSoftware.js';
import Empreendedorismo from './Pages/Portfolio/Materias/Empreendedorismo.js';
import InteracaoHumanoComputador from './Pages/Portfolio/Materias/InteracaoHumanoComputador.js';
import MatematicaDiscreta from './Pages/Portfolio/Materias/MatematicaDiscreta.js';
import Ingles from './Pages/Portfolio/Materias/Ingles.js';
export default function Routess() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/portfolio" exact Component={Portfolio} />
                <Route path="/about" exact Component={About} />
                <Route path="/projeto" exact Component={ProjetoIntegrador} />
                <Route path="/estrutura" exact Component={EstruturaDeDados}/>
                <Route path="/programacao" exact Component={TecnAvancadasProgramacao}/>
                <Route path="/programacaoweb" exact Component={TecnAvancadasWeb}/>
                <Route path="/metodologias" exact Component={MetodologiasAgeis}/>
                <Route path="/banco" exact Component={BancoDeDados}/>
                <Route path="/sistemas" exact Component={SistemasOperacionais}/>
                <Route path="/engenharia" exact Component={EngenhariaSoftware}/>
                <Route path="/empreendedorismo" exact Component={Empreendedorismo}/>
                <Route path="/ihc" exact Component={InteracaoHumanoComputador}/>
                <Route path="/matematica" exact Component={MatematicaDiscreta}/>
                <Route path="/ingles" exact Component={Ingles}/>
            </Routes>
        </BrowserRouter>
    );
}