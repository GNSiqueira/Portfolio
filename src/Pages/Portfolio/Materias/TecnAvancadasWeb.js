import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import Ilustracao from '../../../assets/Portifolio/ProgramacaoWeb/Pagina/programacao-web.png'
import FireBase from '../../../assets/Portifolio/ProgramacaoWeb/Pagina/firebase.png'
import Node from '../../../assets/Portifolio/ProgramacaoWeb/Pagina/node.png'
import React from '../../../assets/Portifolio/ProgramacaoWeb/Pagina/react.png'
import VsCode from '../../../assets/Portifolio/ProgramacaoWeb/Pagina/vs-code.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Tecnicas Avançadas de Programação Web</h1>
                    <img src={Ilustracao} alt='ilustração de programação Web'/>
                    <p>
                        A diplina de Técnicas Avançadas de Programação Web é um mergulho profundo nas tecnologias e metodologias modernas para o desenvolvimento de sistemas web e aplicativos móveis. Esta matéria nos capacita a criar soluções robustas, dinâmicas e centradas no usuário, utilizando as melhores práticas e ferramentas disponíveis no mercado.<br/><br/>
                        A ementa cobre uma ampla gama de tópicos essenciais para o desenvolvimento web. Iniciamos com frameworks para desenvolvimento front-end e back-end, que são fundamentais para construir interfaces de usuário e lógica de negócio eficientes. Aprendemos sobre tecnologias de persistência de dados, incluindo frameworks para mapeamento objeto-relacional e bancos de dados não relacionais, essenciais para a gestão e armazenamento de informações em sistemas web.<br/><br/>
                        Exploramos diversas arquiteturas de sistemas web, como o modelo-visão-controlador (MVC). Essas arquiteturas nos ajudam a estruturar e organizar nossos projetos de forma eficiente e escalável. Também estudamos microsserviços, que permitem a criação de aplicações distribuídas e de fácil manutenção.<br/><br/>
                        A otimização de sites para mecanismos de busca (SEO) é outro aspecto crucial abordado na disciplina, garantindo que nossos projetos sejam facilmente encontrados pelos usuários. Além disso, aprendemos sobre desenvolvimento de aplicações móveis híbridas e nativas, utilizando linguagens e frameworks que garantem a compatibilidade com diversas plataformas.<br/><br/>
                        Até o momento, realizamos um projeto de blog com cadastro de usuário, utilizando React, React DOM e Firebase. Este projeto nos proporcionou uma compreensão prática da construção de interfaces dinâmicas e da integração com serviços de backend para persistência de dados.<br/><br/>
                        Nosso objetivo é utilizar frameworks modernos para desenvolvimento web, construir websites dinâmicos e aplicativos móveis, e implementar arquiteturas eficientes como MVC. Aprendemos a criar e consumir APIs REST, essenciais para a interação entre sistemas, e a aplicar técnicas de SEO para otimização de sites. Além disso, nos aprofundamos no desenvolvimento de aplicativos móveis híbridos, focando em aspectos como interface, eventos, props, estado, navegação, multimídia, notificações e persistência de dados.<br/><br/>
                        Por fim, a disciplina enfatiza o uso de Test-Driven Development (TDD) e controle de versionamento, garantindo a qualidade e a manutenção do código. Com estas habilidades, estamos preparados para enfrentar os desafios do desenvolvimento web moderno e criar soluções inovadoras e de alta performance.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={FireBase} alt=''/>
                        <img src={Node} alt=''/>
                        <img src={React} alt=''/>
                        <img src={VsCode} alt=''/>
                    </div>
                </section>
                <hr/>
                <section className='links'>
                    <h2>Links</h2>
                    <div>
                        <ul>
                            <li><a href='https://github.com/GNSiqueira/blogtravel' target='_blank'>BlogTravel</a></li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}