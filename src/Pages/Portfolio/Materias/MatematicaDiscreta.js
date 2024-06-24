import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/MatematicaDiscreta/Pagina/ilustracao.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Matematica Discreta</h1>
                    <img src={Ilustracao} style={{backgroundColor: 'white', borderRadius: '100%'}} alt='Ilustração'/>
                    <p>
                    A disciplina de Matemática Discreta é fundamental para a formação em análise e desenvolvimento de sistemas, fornecendo as bases teóricas essenciais para diversas áreas da computação. Esta matéria nos capacita a compreender e aplicar conceitos matemáticos para resolver problemas complexos e desenvolver algoritmos eficientes.<br/><br/>

                    A ementa da disciplina abrange uma ampla gama de tópicos fundamentais. Começamos com a lógica matemática, que nos permite formalizar e analisar argumentos matemáticos de maneira rigorosa. Estudamos conjuntos, incluindo operações e propriedades, que são essenciais para a organização e manipulação de dados em sistemas computacionais.<br/><br/>

                    Combinatória é outro tópico chave, fornecendo técnicas para contar, combinar e permutar elementos de conjuntos, fundamental para a análise de algoritmos e otimização de recursos. Em seguida, exploramos relações e funções, conceitos básicos mas cruciais para a modelagem de problemas e a construção de soluções.<br/><br/>

                    Os conceitos básicos de grafos são introduzidos, proporcionando uma compreensão das estruturas de dados usadas para representar redes e relações complexas. A disciplina também aborda a análise de algoritmos, incluindo introdução à recursividade e relações de recorrência, que são vitais para o desenvolvimento de algoritmos eficientes.<br/><br/>

                    Relações e sua aplicação em banco de dados, especificamente a álgebra relacional, são estudadas para entender como os dados podem ser organizados e manipulados eficientemente. Aritmética computacional e a solução numérica de equações não-lineares e sistemas de equações lineares são exploradas, fornecendo ferramentas para resolver problemas matemáticos complexos de forma computacional.<br/><br/>

                    Até o momento, aprendemos a construir e interpretar tabelas verdade, fundamentais para a lógica proposicional, e exploramos a teoria dos conjuntos, que é a base para muitas estruturas de dados e algoritmos.<br/><br/>

                    Nosso objetivo é compreender os conceitos de funções racionais, trigonométricas, exponenciais e logarítmicas para aplicá-los no desenvolvimento de programas computacionais. Além disso, aprendemos a utilizar a teoria de conjuntos e subconjuntos no desenvolvimento de banco de dados, aplicando relações binárias, equivalentes e de ordem para propor soluções em aplicações e sistemas no desenvolvimento de algoritmos.<br/><br/>

                    Com uma sólida compreensão destes conceitos, estamos bem equipados para enfrentar os desafios da programação e do desenvolvimento de sistemas, utilizando as ferramentas matemáticas para criar soluções eficientes e inovadoras.<br/><br/>
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