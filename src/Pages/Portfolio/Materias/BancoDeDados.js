import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/BancoDeDados/Pagina/ilustracao.png'
import Postgres from '../../../assets/Portifolio/BancoDeDados/Pagina/postgre.png'
import SqlServer from '../../../assets/Portifolio/BancoDeDados/Pagina/sqlserver.png'
import Teams from '../../../assets/Portifolio/ProjetoIntegrador/Pagina/teams.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Banco De Dados</h1>
                    <img style={{backgroundColor: 'white', borderRadius: '100%'}} src={Ilustracao} alt='Ilustração'/>
                    <p>
                    A disciplina de Banco de Dados nos proporciona uma compreensão profunda sobre o design, implementação e gerenciamento de bancos de dados relacionais e não relacionais, preparando-nos para enfrentar desafios complexos no armazenamento e recuperação de informações. Este curso é fundamental para a criação de sistemas eficientes e confiáveis, essenciais para a maioria das aplicações modernas.<br/><br/>
                    A ementa abrange uma ampla gama de tópicos essenciais para o domínio de bancos de dados. Iniciamos com o projeto e implementação de bancos de dados relacionais, onde aprendemos a criar consultas complexas com agrupamentos e subconsultas, além de implementar restrições de integridade. Desenvolvemos habilidades para criar consultas utilizando visões, que são fundamentais para simplificar a recuperação de dados complexos.<br/><br/>
                    A programação em ambiente de banco de dados é abordada com ênfase em procedimentos armazenados, gatilhos e funções, que nos permitem automatizar e otimizar tarefas. Estudamos estruturas de índices e técnicas de processamento e otimização de consultas para melhorar o desempenho do banco de dados. Também exploramos o processamento de transações e o controle de concorrência, essenciais para manter a integridade e consistência dos dados em ambientes multiusuários.<br/><br/>
                    Além dos bancos de dados relacionais, a disciplina nos introduz às novas tecnologias aplicadas a bancos de dados, incluindo dados estruturados e não estruturados, e à arquitetura de bancos de dados não convencionais. Estudamos a modelagem NoSQL, compreendendo suas definições, motivações e as principais categorias: chave-valor, orientados a documentos, orientados a colunas e orientados a grafos. Aprendemos a projetar e implementar bancos de dados não relacionais, abordando suas aplicações práticas.<br/><br/>
                    Outro aspecto crucial é a compreensão dos métodos de cópia de segurança e restauração tanto para bancos de dados relacionais quanto para não relacionais, garantindo a recuperação e a segurança dos dados.<br/><br/>
                    Até o momento, aprendemos a utilizar comandos SQL fundamentais como SELECT, INNER JOIN, FULL JOIN, LEFT JOIN, RIGHT JOIN, além de criar VIEWS e PROCEDURES. Essas habilidades nos permitem realizar consultas avançadas e manipular dados de maneira eficiente.<br/><br/>
                    Nosso objetivo é aplicar a normalização para a implementação de bancos de dados, utilizando adequadamente os conceitos de definição, manipulação e consulta de dados. Implementamos stored procedures e gatilhos para resolver problemas específicos em sistemas, e identificamos características de recuperação e segurança dos SGBDs. Caracterizamos bancos de dados relacionais e não relacionais conforme as especificações do projeto, utilizando sistemas de banco de dados paralelos e distribuídos. Além disso, compreendemos os conceitos de data warehouse e mineração de dados, e identificamos métodos seguros para o gerenciamento de bancos de dados.<br/><br/>
                    A disciplina de Banco de Dados nos equipa com as ferramentas e conhecimentos necessários para projetar, implementar e gerenciar sistemas de banco de dados eficientes e seguros, preparados para atender às exigências de ambientes de dados cada vez mais complexos e diversificados.<br/><br/>
                    </p>
                </section>
                <hr/>
                <section className='ferramentas'>
                    <h2>Ferramentas</h2>
                    <div>
                        <img src={Postgres} alt='PostreSQL'/>
                        <img src={SqlServer} alt='SqlServer'/>
                        <img src={Teams} alt='Teams'/>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}