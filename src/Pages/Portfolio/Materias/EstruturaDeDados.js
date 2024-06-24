import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';
import Ilustracao from '../../../assets/Portifolio/EstruturaDeDados/Pagina/ilustracao.png'
import LingC from '../../../assets/Portifolio/EstruturaDeDados/Pagina/linguagem-c.png'
import VsCode from '../../../assets/Portifolio/EstruturaDeDados/Pagina/vscode.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function EstruturaDeDados() {
    return (
        <div className='body'>
        <NavBar/>
        <main>
            <section className='content'>
                <h1>Estrutura de Dados</h1>
                <img src={Ilustracao} alt=''/>
                <p>
                A disciplina de Estrutura de Dados é fundamental para qualquer desenvolvedor, pois proporciona o conhecimento necessário para organizar, gerenciar e armazenar dados de forma eficiente. Através dessa matéria, aprendemos a utilizar diversas estruturas de dados e algoritmos, que são a base para a resolução eficaz de problemas complexos no desenvolvimento de software.<br/><br/>
                O curso começa com os conceitos de alocação dinâmica e po'nteiros, essenciais para a gestão eficiente da memória. A partir daí, exploramos a análise de algoritmos, medindo o tempo de execução e introduzindo a notação assintótica, que nos ajuda a avaliar a eficiência de diferentes algoritmos.<br/><br/>
                Focamos nos tipos abstratos de dados, como listas, pilhas e filas, compreendendo suas operações, representações e manipulações. Por exemplo, desenvolvemos algoritmos simples como uma fila de hospital, onde o primeiro paciente a entrar é o primeiro a sair, aplicando os conceitos de pilha e fila. Essas estruturas são fundamentais para melhorar o desempenho de algoritmos, economizando processamento e memória.<br/><br/>
                Nosso objetivo é entender e criar algoritmos avançados, utilizando estruturas de dados lineares e não-lineares para resolver problemas de forma eficiente. Simulamos o funcionamento de algoritmos de ordenação e buscamos entender e aplicar técnicas de busca sequencial e binária. Essas habilidades são essenciais para desenvolver programas que não apenas funcionem corretamente, mas também de maneira otimizada.<br/><br/>
                Até o momento, montamos algoritmos simples, trabalhando com vetores e aprimorando nosso entendimento sobre como a escolha correta da estrutura de dados pode impactar significativamente o desempenho de um programa. Esta disciplina é um pilar importante no curso de Análise e Desenvolvimento de Sistemas, preparando-nos para enfrentar desafios mais complexos no futuro.
                </p>
            </section>
            <hr/>
            <section className='ferramentas'>
                <h2>Ferramentas</h2>
                <div>
                    <img src={LingC} alt='Linguagem de programação C'/>
                    <img src={VsCode} alt='Visual Studio Code'/>
                    <img src={Teams} alt='Teams da microsoft'/>
                </div>
            </section>
            <hr/>
            <section className='links'>
                <h2>Links</h2>
                <div>
                    <ul>
                        <li><a href='https://github.com/GNSiqueira/Lista4_Vetores-e-Matrizes' target='_blank'>Lista 4 Vetores e Matrizes</a></li>
                        <li><a href='https://github.com/GNSiqueira/Lista2_LacoDeRepeticao' target='_blank'>Laço de repetição</a></li>
                    </ul>
                </div>
            </section>
        </main>
        <Footer/>
    </div>
    );
}