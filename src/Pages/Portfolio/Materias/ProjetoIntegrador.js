import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import Ilustracao from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/ilustracao.png'
import GitHub from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/github.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'
import Word from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/word.png'

export default function ProjetoIntegrador() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Projeto Integrador</h1>
                    <img src={Ilustracao} alt='GitHub'/>
                    <p>A disciplina de Projeto Integrador é uma imersão prática no desenvolvimento de software, onde aplicamos os conhecimentos adquiridos em várias áreas da Engenharia de Software para criar soluções reais e impactantes. Nessa jornada, exploramos desde o levantamento e análise de requisitos até a entrega de um protótipo funcional, alinhando sempre as necessidades do negócio com as expectativas do cliente.<br/><br/>
                    No início do curso, fomos introduzidos ao Git e GitHub, ferramentas essenciais para o versionamento e controle de código, promovendo uma colaboração eficaz entre os membros do grupo. Em seguida, nos dedicamos ao desenvolvimento de um projeto real: um sistema de controle de estoque para o Lar dos Velhinhos em Jales. Este projeto é dividido entre diversos grupos, cada um focado em uma funcionalidade específica, como controle de vacinas, compras e enfermagem, promovendo uma experiência rica de trabalho em equipe e integração de módulos.<br/><br/>
                    Além disso, desenvolvemos habilidades em design de interfaces na diciplina de IHC(Interação Humano e Computador) e integrando posteriormente a engenharia de software, acessibilidade e experiência do usuário, garantindo que os sistemas criados não sejam apenas funcionais, mas também intuitivos e agradáveis de usar. A disciplina também aborda a importância das equipes autogerenciáveis e a comunicação eficaz, elementos essenciais para o sucesso de qualquer projeto de software.<br/><br/>
                    Em resumo, o Projeto Integrador é uma experiência transformadora que nos prepara para os desafios reais do mercado de trabalho, capacitando-nos a criar soluções tecnológicas que realmente fazem a diferença.</p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={GitHub} alt='Logo do GitHub'/>
                        <img src={Teams} alt='Logo do Teams'/>
                        <img src={Word} alt='Logo do Word'/>
                    </div>
                </section>
                <hr/>
                <section className='links'>
                    <h2>Links</h2>
                    <div>
                        <ul>
                            <li><a href='https://github.com/GNSiqueira/curso_git' target='_blank'>Curso Git</a></li>
                            <li><a href='https://github.com/GNSiqueira/projetoPullRequest' target='_blank'>Pull Request</a></li>
                            <li><a href='https://github.com/GNSiqueira/AlunosApi' target='_blank'>Alunos API</a></li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}