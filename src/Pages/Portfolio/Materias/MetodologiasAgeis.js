import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import Ilustracao from '../../../assets/Portifolio/MetodologiasAgeis/Pagina/ilustracao.png'
import Azure from '../../../assets/Portifolio/MetodologiasAgeis/Pagina/azure.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function MetodologiasAgeis() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Gestão Ágil de Projetos de Software</h1>
                    <img src={Ilustracao} alt=''/>
                    <p>
                        A disciplina de Gestão Ágil de Projetos de Software é uma imersão nas metodologias modernas de gerenciamento de projetos, destacando a flexibilidade e a adaptabilidade dos métodos ágeis em contraste com as abordagens tradicionais. Este curso nos capacita a aplicar práticas ágeis no desenvolvimento de software, garantindo entregas rápidas e alinhadas às necessidades dos clientes.<br/><br/>
                        A ementa cobre uma ampla gama de tópicos essenciais para a gestão de projetos de software. Iniciamos com uma visão geral do gerenciamento tradicional de projetos versus a metodologia ágil, destacando suas diferenças e benefícios. Exploramos os princípios, valores e filosofia dos métodos ágeis, com uma análise detalhada do Manifesto Ágil, que é a base dessas práticas.<br/><br/>
                        Estudamos os principais métodos ágeis, como Scrum, Kanban e Extreme Programming (XP), compreendendo suas particularidades e aplicações. A disciplina enfatiza as práticas ágeis para gestão de projetos, incluindo o engajamento das partes interessadas, gerenciamento de equipes, planejamento adaptativo, detecção e resolução de problemas, e melhoria contínua.<br/><br/>
                        Aprendemos sobre os papéis e responsabilidades em equipes ágeis, entendendo como cada membro contribui para o sucesso do projeto. Além disso, focamos na gestão de performance e gestão de times ágeis, utilizando técnicas para medir a eficácia e promover a motivação e desempenho elevados das equipes.<br/><br/>
                        Até o momento, exploramos três formas comuns de aplicação de métodos ágeis:<br/><br/>
                        Iterativo: Foco em refinamentos contínuos e sucessivos do produto.<br/><br/>
                        Incremental: Desenvolvimento em pequenos incrementos funcionais.<br/><br/>
                        Iterativo e Incremental: Combinação das duas abordagens anteriores para obter o máximo de flexibilidade e adaptabilidade.<br/><br/>
                        Também aprendemos sobre Extreme Programming (XP), uma metodologia que enfatiza a melhoria contínua, feedback frequente e alta qualidade no desenvolvimento de software.<br/><br/>
                        Além disso, estudamos o gerenciamento ágil de projetos (APM) e as práticas específicas da gestão ágil de projetos (AGP), compreendendo como essas abordagens podem ser aplicadas para otimizar a gestão de tempo, recursos e expectativas dos stakeholders.<br/><br/>
                        Nosso objetivo é conhecer e aplicar conceitos, técnicas e ferramentas para revisar e aprimorar os modelos e processos de gestão de projetos de software. Empregamos as melhores práticas ágeis no gerenciamento de projetos de software, visando maior eficiência e satisfação dos stakeholders.<br/><br/>
                        A disciplina de Gestão Ágil de Projetos de Software nos prepara para enfrentar os desafios do gerenciamento de projetos no desenvolvimento de software moderno, capacitando-nos a liderar projetos ágeis que respondam rapidamente às mudanças e entreguem valor contínuo aos clientes.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Azure} alt='Azure'/>
                        <img src={Teams} alt='Teams'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}