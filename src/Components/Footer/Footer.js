import React from "react";
import "./Footer.css";

export default function Footer() {

    return (
        <footer>
            <div className="social">
                <a href="https://github.com/GNSiqueira" target="_blank">GitHub</a>
                <a href="https://www.linkedin.com/in/gabrielnetosiqueira/" target="_blank">Linkedin</a>
                <a href="mailto:gabriel272173siqueira@gmail.com?subject=Contato&body=" target="_blank">Gmail</a>
            </div>
            <p>&copy; 2024 Gabriel Neto. Todos os direitos reservados.</p>
            <a href="#topo">Voltar para o topo</a>
        </footer>
    );
}