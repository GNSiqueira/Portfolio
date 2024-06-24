import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/Empreendedorismo/Pagina/ilustracao.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'
import Word from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/word.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Empreendedorismo</h1>
                    <img src={Ilustracao} style={{backgroundColor: 'white', borderRadius: '100%'}} alt='Ilustração'/>
                    <p>
                    A disciplina de Empreendedorismo é uma imersão nas práticas modernas e inovadoras de criação e gestão de negócios, com um enfoque especial no papel crucial da tecnologia da informação (TI). Este curso nos capacita a entender e aplicar modelos de negócios inovadores, tornando nossas ideias escaláveis e sustentáveis, e preparando-nos para os desafios do mercado contemporâneo.<br/><br/>

                    A ementa aborda novos tipos de negócios e segmentos, especialmente aqueles fortemente apoiados por TI, como Startups e Fintechs. Exploramos caminhos para criar e favorecer negócios, com o objetivo de torná-los escaláveis e sustentáveis. Estudamos conceitos de modelos de negócios tradicionais e como aplicá-los na análise e elaboração de negócios competitivos.<br/><br/>

                    Aprendemos sobre o alinhamento estratégico de TI e a definição e aplicação de business cases para projetos de TI. Técnicas para a elaboração de casos de negócio e cálculo do retorno sobre investimento em projetos de TI são essenciais para garantir a viabilidade financeira e estratégica de nossas iniciativas.<br/><br/>

                    A disciplina também cobre a avaliação e controle do desempenho da estratégia empresarial, utilizando ferramentas como Mapas Estratégicos e Balanced Scorecard (BSC). Estudamos as perspectivas e a criação de um BSC, que nos ajudam a monitorar e melhorar a competitividade empresarial.<br/><br/>

                    Além disso, desenvolvemos projetos de inovação e tecnologia voltados para a melhoria da competitividade empresarial, participando de desafios e competições em parceria com empresas. Apresentamos pitches de inovação para empresas parceiras, uma prática vital para comunicar efetivamente nossas ideias e conquistar investidores e stakeholders.<br/><br/>

                    Até o momento, fomos introduzidos a conceitos de inteligência corporativa, análise de negócios de startups e gerenciamento de negócios. Essas informações são fundamentais para entender como iniciar e gerenciar um negócio com sucesso.<br/><br/>

                    Nosso objetivo é elaborar um modelo de negócios aplicando metodologias disruptivas e utilizar ferramentas de mercado na elaboração de um plano de negócios. Analisamos e aplicamos as melhores práticas financeiras na execução de projetos e aplicamos as melhores práticas tecnológicas na elaboração do plano de negócios. Desenvolvemos e aplicamos técnicas de resolução de problemas e trabalhos em grupo, essenciais para o ambiente dinâmico e colaborativo das startups.<br/><br/>

                    A disciplina de Empreendedorismo nos prepara para criar e gerenciar negócios inovadores, utilizando tecnologias modernas e práticas empresariais avançadas. Com este conhecimento, estamos capacitados a desenvolver negócios que não apenas sobrevivem, mas prosperam em um mercado competitivo, trazendo inovação e valor para os clientes e a sociedade.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Teams} alt='Teams'/>
                        <img src={Word} alt='Word'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}