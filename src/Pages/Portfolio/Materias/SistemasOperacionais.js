import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/SistemasOperacionais/Pagina/ilustracao.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Sistemas Operacionais</h1>
                    <img src={Ilustracao} alt=''/>
                    <p>
                        A disciplina de Sistemas Operacionais é fundamental para compreendermos a base sobre a qual todo software funciona. Este curso nos proporciona um entendimento aprofundado da organização dos computadores e do funcionamento dos sistemas operacionais, preparando-nos para desenvolver software eficiente e eficaz.<br/><br/>

                        A ementa cobre uma ampla gama de tópicos essenciais. Iniciamos com a organização de computadores, explorando componentes como memórias, Unidade Central de Processamento (CPU), e dispositivos de entrada e saída. Aprendemos sobre modos de endereçamento, conjunto de instruções, e os mecanismos de interrupção e exceção, que são cruciais para a comunicação entre hardware e software.<br/><br/>

                        Na introdução aos sistemas operacionais, aprendemos sobre a estrutura e funções básicas de um sistema operacional, incluindo a concorrência, que é a capacidade de executar múltiplas operações simultaneamente. Exploramos a estrutura dos sistemas operacionais, processos e threads, e as técnicas de sincronização e comunicação entre processos, essenciais para a estabilidade e eficiência dos sistemas.<br/><br/>

                        A gerência de processadores e memórias é outro tópico crucial, onde aprendemos a alocar recursos de forma eficaz e a garantir que as operações sejam executadas sem conflitos. Além disso, estudamos sistemas operacionais distribuídos e de redes, que são cada vez mais relevantes em um mundo conectado.<br/><br/>

                        Até o momento, entendemos vários conceitos do hardware do computador, incluindo a Unidade Lógica e Aritmética (ULA), processador, memória cache, registradores e memória principal. Esses conhecimentos são fundamentais para entender como o software interage com o hardware para executar tarefas complexas.<br/><br/>

                        Nosso objetivo é entender e aplicar os conceitos de organização de computadores e sistemas operacionais no desenvolvimento de software. Aprendemos a aplicar conceitos de threads e gerenciamento de memórias no desenvolvimento de sistemas e projetos, garantindo que nossos programas sejam eficientes e funcionem corretamente em diferentes ambientes de execução.<br/><br/>

                        A disciplina de Sistemas Operacionais nos prepara para enfrentar os desafios do desenvolvimento de software, fornecendo uma base sólida em como os sistemas operam internamente. Com este conhecimento, estamos capacitados a criar soluções de software que sejam não apenas funcionais, mas também otimizadas para desempenho e estabilidade.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Teams} alt='Teams'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}