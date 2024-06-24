import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/EngenhariaDeSoftware/Pagina/ilustracao.png'
import Word from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/word.png'
import Astah from '../../../assets/Portifolio/EngenhariaDeSoftware/Pagina/astah.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Engenharia de Software</h1>
                    <img src={Ilustracao} style={{backgroundColor: 'white', borderRadius: '100%'}} alt='Ilustração'/>
                    <p>
                    A disciplina de Engenharia de Software é essencial para entendermos os processos, técnicas e ferramentas necessárias para o desenvolvimento de software de alta qualidade. Este curso nos capacita a aplicar métodos estruturados e eficientes no ciclo de vida de desenvolvimento de software, garantindo que os sistemas desenvolvidos atendam às necessidades dos usuários de forma eficaz e confiável.<br/><br/>

                    A ementa abrange uma ampla gama de tópicos essenciais para o desenvolvimento de software. Começamos com os modelos de processos de desenvolvimento de software, incluindo o Modelo em Cascata, Espiral e Prototipagem. Esses modelos nos ajudam a entender as diferentes abordagens para o planejamento e execução de projetos de software.<br/><br/>

                    Estudamos a classificação dos requisitos de software em funcionais e não funcionais, bem como as técnicas de levantamento de requisitos, que são fundamentais para garantir que o software atenda às expectativas dos usuários. Aprendemos sobre o projeto de arquitetura, que envolve a definição da estrutura geral do sistema, e sobre o projeto e implementação, que se concentram na construção efetiva do software.<br/><br/>

                    A disciplina também aborda o reuso de software e a engenharia baseada em componentes, que são práticas importantes para aumentar a eficiência e reduzir custos no desenvolvimento de software. Exploramos a engenharia de software distribuído e a arquitetura orientada a serviços, que são cruciais para o desenvolvimento de sistemas modernos e escaláveis.<br/><br/>

                    Realizamos estudos de viabilidade para avaliar a possibilidade de sucesso de projetos de software, considerando fatores técnicos, econômicos e organizacionais. Além disso, aprendemos técnicas de documentação, essenciais para a comunicação clara e eficiente entre os membros da equipe de desenvolvimento e outros stakeholders. <br/><br/>

                    A disciplina também nos introduz a metodologias para o desenvolvimento de sistemas, fornecendo uma visão geral de diferentes abordagens e suas aplicações práticas.<br/><br/>

                    Até o momento, entendemos os fundamentos dos diagramas de classe, de caso de uso e outros conceitos fundamentais da engenharia de software. Esses diagramas são ferramentas poderosas para a modelagem de sistemas, ajudando-nos a visualizar e planejar a estrutura e o comportamento do software.<br/><br/>

                    Nosso objetivo é identificar as características dos sistemas de informação, seus tipos, viabilidade técnica, características de custo, valor e qualidade da informação. Explicamos as características de um sistema, seus componentes e relacionamentos, compreendendo o ciclo de vida utilizando as concepções do modelo cascata. Utilizamos conceitos da UML (Unified Modeling Language) na análise de requisitos e na elaboração de diagramas, focando na modelagem de sistemas de forma clara e precisa.<br/><br/>

                    A disciplina de Engenharia de Software nos prepara para enfrentar os desafios do desenvolvimento de sistemas complexos, fornecendo-nos as habilidades e conhecimentos necessários para criar software que seja eficiente, escalável e alinhado às necessidades dos usuários e das organizações.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Teams} alt='Teams'/>
                        <img src={Word} alt='Word'/>
                        <img src={Astah} alt='AstahUML'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}