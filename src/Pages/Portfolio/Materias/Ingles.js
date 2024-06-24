import './css/Materias.css';
import NavBar from '../../../Components/NavBar/NavBar';
import Footer from '../../../Components/Footer/Footer';

import Ilustracao from '../../../assets/Portifolio/Ingles/Pagina/ilustracao.png'

export default function TecnAvancadasWeb() {
    return (
        <div className='body'>
            <NavBar/>
            <main>
                <section className='content'>
                    <h1>Inglês</h1>
                    <img src={Ilustracao} style={{borderRadius: '100%' }} alt=''/>
                    <p>
                    A disciplina de Inglês é crucial para a formação profissional em Análise e Desenvolvimento de Sistemas, proporcionando as habilidades linguísticas necessárias para atuar em um mercado globalizado. Esta matéria foca no desenvolvimento da compreensão e produção oral e escrita por meio de funções comunicativas e estruturas simples da língua inglesa.<br/><br/>
                    A ementa da disciplina aborda o desenvolvimento das habilidades de comunicação necessárias em contextos pessoais, acadêmicos e profissionais. Enfatiza a apropriação de estratégias de aprendizagem e o uso de repertórios relativos a funções comunicativas e estruturas gramaticais simples. Essas habilidades são essenciais para realizar tarefas cotidianas e profissionais, como atender telefonemas, redigir notas e mensagens, descrever rotinas de trabalho e fornecer informações numéricas.<br/><br/>
                    O objetivo da disciplina é capacitar os alunos a compreender e produzir textos simples, tanto orais quanto escritos, que são relevantes para sua atuação profissional. Isso inclui a habilidade de se apresentar e fornecer informações pessoais e corporativas, descrever áreas de atuação de empresas e expandir o uso de estratégias de compreensão para interpretar textos da área de tecnologia.<br/><br/>
                    Até o momento, focamos no desenvolvimento das seguintes habilidades:<br/><br/>
                    Compreensão e Produção Oral e Escrita: Aprendemos a nos apresentar e fornecer informações pessoais e corporativas, descrever áreas de atuação e rotina de trabalho.<br/>
                    Estratégias de Compreensão: Trabalhamos em expandir nossas estratégias para entender o conteúdo de textos orais e escritos relacionados à nossa área de atuação.<br/>
                    Comunicação Profissional: Praticamos fazer pedidos, fornecer e compreender informações numéricas como horários, datas e locais, atender telefonemas e redigir notas e mensagens simples.<br/>
                    Reconhecimento Fonético: Estudamos a entoação e o uso de diferentes fonemas da língua inglesa para melhorar nossa pronúncia e compreensão auditiva.<br/><br/>
                    Com estas habilidades, estamos nos preparando para atuar eficazmente em um ambiente profissional globalizado, onde a proficiência em inglês é um diferencial competitivo importante.<br/><br/>
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    );
}