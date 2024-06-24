import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import './css/Materias.css';
import Ilustracao from '../../../assets/Portifolio/Programacao/Pagina/ilustracao.png'
import CSharp from '../../../assets/Portifolio/Programacao/Pagina/csharp.png'
import VisualStudio from '../../../assets/Portifolio/Programacao/Pagina/visual-studio.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function TecnologiasAvancadasProgramacao() {
    
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Tecnicas Avançadas de Programação</h1>
                    <img src={Ilustracao} alt='GitHub'/>
                    <p>
                        A disciplina de Técnicas Avançadas de Programação nos leva a um nível mais profundo na arte de desenvolver software, abordando conceitos avançados de programação orientada a objetos e suas aplicações práticas. Esta matéria é essencial para aprimorar nossas habilidades de desenvolvimento, permitindo-nos criar aplicações robustas e eficientes.<br/><br/>

                        Começamos com os fundamentos da orientação a objetos, como classes, objetos, encapsulamento, herança e polimorfismo. Aprendemos a declarar classes e objetos, utilizar classes abstratas e métodos, e a implementar sobrecarga de métodos. Exploramos conceitos complexos como herança múltipla e modificadores de acesso, além de compreender o uso de construtores e a manipulação de exceções.<br/><br/>

                        Adentramos também no desenvolvimento de interfaces gráficas e na aplicação de padrões de projeto orientados a objetos. Estudamos padrões fundamentais da GoF (Gang of Four) e padrões arquiteturais como MVC, MVVM e MVP, que são cruciais para a organização e manutenção do código. Aprendemos a integrar nossas aplicações com bancos de dados, utilizando frameworks de persistência de dados e desenvolvimento de interfaces gráficas.<br/><br/>

                        Outro aspecto importante da disciplina é o Desenvolvimento Dirigido a Testes (TDD), que nos ensina a criar testes antes mesmo de escrever o código, garantindo assim a qualidade e a funcionalidade das aplicações desde o início. Também praticamos o controle de versionamento, essencial para a colaboração e a gestão eficiente de projetos.<br/><br/>

                        Até o momento, revisamos conceitos fundamentais como matrizes e vetores, e desenvolvemos algoritmos que melhoram o desempenho dos programas. Realizamos um projeto prático de uma biblioteca, implementando métodos HTTP para gravação, atualização, listagem e inserção de dados, aplicando na prática os conceitos de orientação a objetos e integração com bancos de dados.<br/><br/>

                        Nosso objetivo é aplicar os conceitos de orientação a objetos no desenvolvimento de aplicações reais, criar interfaces gráficas intuitivas e funcionais, e compreender o tratamento de exceções de maneira orientada a objetos. Além disso, buscamos dominar arquiteturas como o Model-View-Controller (MVC), conhecer frameworks de desenvolvimento front-end e back-end, e aplicar padrões de projeto para melhorar a estrutura e a manutenção do código.<br/><br/>

                        Em resumo, Técnicas Avançadas de Programação é uma disciplina que nos equipa com as ferramentas e o conhecimento necessário para enfrentar desafios complexos no desenvolvimento de software, preparando-nos para criar soluções inovadoras e de alta qualidade.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={VisualStudio} alt='Logo do Visual Studio'/>
                        <img src={CSharp} alt='Logo do CSharp'/>
                        <img src={Teams} alt='Teams'/>
                    </div>
                </section>
                <hr/>
                <section className='links'>
                    <h2>Links</h2>
                    <div>
                        <ul>
                            <li><a href='https://github.com/GNSiqueira/ProjetoBiblioteca' target='_blank'>Projeto biblioteca</a></li>
                            <li><a href='https://github.com/GNSiqueira/lista_vetor' target='_blank'>Lista de vetores</a></li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}