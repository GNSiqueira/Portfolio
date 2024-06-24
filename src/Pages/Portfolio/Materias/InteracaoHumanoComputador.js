import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/InteracaoHumanoComputador/Pagina/ilustracao.png'
import Figma from '../../../assets/Portifolio/InteracaoHumanoComputador/Pagina/figma.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Interação Humano Computador</h1>
                    <img src={Ilustracao} style={{borderRadius: '100%'}} alt=''/>
                    <p>
                    A disciplina de Interação Humano-Computador (IHC) nos conduz ao fascinante campo da interface entre usuários e sistemas computacionais, focando em criar experiências que sejam não apenas funcionais, mas também intuitivas e agradáveis. Este curso nos capacita a projetar e avaliar interfaces que atendem às necessidades dos usuários, aplicando princípios de usabilidade, acessibilidade e comunicabilidade.<br/><br/>

                    A ementa abrange diversos aspectos cruciais da IHC. Começamos com os conceitos de interface, interação e affordance, que nos ajudam a entender como os usuários percebem e interagem com os sistemas. Estudamos a importância da usabilidade, acessibilidade e comunicabilidade na criação de interfaces eficazes.<br/><br/>

                    A disciplina também cobre a arquitetura da informação, essencial para organizar e estruturar o conteúdo de forma lógica e intuitiva. Identificamos as necessidades dos usuários e os requisitos de IHC, fundamentais para orientar o design das interfaces. Aprendemos sobre projeto e prototipação em diferentes níveis de fidelidade (baixa, média e alta), utilizando recomendações, modelos e notações de design.<br/><br/>

                    Avaliação é um componente chave da IHC, e exploramos diversas técnicas como avaliação heurística, avaliação de comunicabilidade e inspeção semiótica. Realizamos testes de usabilidade para garantir que as interfaces sejam eficientes e fáceis de usar. Estudamos também a experiência do usuário (UX) e a experiência do consumidor, compreendendo como criar interfaces que proporcionem uma experiência positiva e envolvente.<br/><br/>

                    A disciplina nos ensina a criar e avaliar o perfil do usuário e personas, ferramentas essenciais para entender e projetar para o público-alvo. Investigamos diferentes métodos de pesquisa com usuários, incluindo qualitativa, quantitativa, atitudinal, comportamental, testes A/B, mapas de calor, monitoramento de cliques e funil, etnografia, design participativo, testes de conceito e desejabilidade, e pesquisas de satisfação. Também aprendemos sobre redação para UX, crucial para comunicar de forma eficaz com os usuários.<br/><br/>

                    Exploramos a experiência do usuário para computação ubíqua e Internet das Coisas (IoT), áreas emergentes que apresentam novos desafios e oportunidades para a IHC.<br/><br/>

                    Até o momento, realizamos um breve projeto utilizando nossos conhecimentos atuais e entregamos para avaliação por outras pessoas. No início do ano, analisamos os trabalhos de conclusão de curso (TCCs) desenvolvidos no ano passado, proporcionando uma visão prática e crítica dos conceitos de IHC aplicados em projetos reais.<br/><br/>

                    Nosso objetivo é conhecer e aplicar conceitos, modelos e técnicas de IHC, projetar e avaliar sistemas computacionais interativos utilizando os princípios de usabilidade e acessibilidade. Compreendemos as implicações da fisiologia, psicologia e cognição na interatividade dos sistemas, aplicamos os conceitos da Engenharia Semiótica no desenvolvimento e avaliação de sistemas, e conhecemos as melhores práticas de UX, Interface Gráfica do Usuário e Experiência do Consumidor. Além disso, aprendemos a criar e gerenciar pesquisas quantitativas e qualitativas, e a criar e avaliar perfis de usuários e personas.<br/><br/>

                    A disciplina de IHC nos prepara para criar interfaces que não apenas funcionem bem, mas que também ofereçam uma experiência agradável e satisfatória aos usuários, integrando princípios de design, psicologia e tecnologia de forma harmoniosa e eficaz.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Figma} alt='Figma'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}