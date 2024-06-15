import React from "react";
import './About.css'
import NavBar from "../../Components/NavBar/NavBar";
import img1 from '../../assets/ilustrationprogrammer.svg'
import img2 from '../../assets/codingilustration.svg'

export default function About() {
    return(
        <div className="about">
            <NavBar />
            <div className="content">
                <h2><span>&lt;/&gt;</span>Sobre Mim!</h2>
                <p><img src={img1}/>
                Olá, meu nome é Gabriel Neto, e sou apaixonado por tecnologia. Minha trajetória até aqui foi marcada por uma série de decisões e acontecimentos que moldaram meu caminho profissional e pessoal.<br/><br/>
                Desde cedo, sempre tive uma forte inclinação para a área de exatas, inicialmente considerando seguir carreiras em matemática ou engenharia. No entanto, a pandemia trouxe mudanças significativas para todos nós, e foi durante esse período de reclusão que descobri minha verdadeira paixão: a programação. Ao concluir o 9° Ano, decidi ingressar na Etec Jales, onde tive a oportunidade de cursar o ensino médio integrado com o curso técnico em Análise e Desenvolvimento de Sistemas (AMS).<br/><br/>
                Esse curso foi um divisor de águas na minha vida. Durante o ensino médio, pude mergulhar no mundo da tecnologia e perceber que essa era a área que sempre quis seguir, mesmo sem saber disso anteriormente. Fui fascinado pelas possibilidades que a programação oferecia e pela capacidade de criar soluções que poderiam impactar a vida das pessoas de maneira significativa.<br/><br/>
                Atualmente, estou estagiando na Cooperjales, onde atuo na área de TI, solucionando diversos problemas técnicos e aprimorando minhas habilidades diariamente. Além disso, tenho projetos publicados no GitHub, incluindo meu trabalho de conclusão de curso (TCC) do ensino médio, que me deu uma base sólida para enfrentar desafios mais complexos. Paralelamente, realizo trabalhos avulsos como técnico para uma empresa especializada em impressoras e também tenho conhecimentos como gestor de tráfego na área de marketing digital.<br/><br/>
                Minhas habilidades técnicas incluem um profundo conhecimento em automações com Python, desenvolvimento de páginas com HTML e CSS, e um entendimento básico de JavaScript. Estou sempre buscando aprender mais e aprimorar minhas competências para me tornar um desenvolvedor cada vez mais completo.<br/><br/>
                <img src={img2}/>    
                Meus objetivos profissionais são ambiciosos. Desejo desenvolver um software que possa atender a uma ampla gama de usuários, impactando positivamente a vida de muitas pessoas. Esse projeto é um passo fundamental para meu grande sonho: fundar minha própria empresa de tecnologia. Acredito que a inovação e a tecnologia são ferramentas poderosas para transformar o mundo e estou determinado a fazer parte dessa transformação.<br/><br/>
                Em termos de interesses pessoais, almejo a liberdade de trabalhar quando e onde eu quiser, sem depender de um emprego formal ou do regime CLT. Quero ser meu próprio chefe, liderando projetos que me apaixonem e me desafiem constantemente. Minha filosofia de vida se baseia na ideia de que devemos trabalhar intensamente e dedicar-nos ao máximo no início, para desfrutar das recompensas mais tarde. Acredito que o esforço e a dedicação são os alicerces para uma vida de sucesso e realização.<br/><br/>
                Obrigado por visitar meu portfólio. Espero que minha história e meus projetos inspirem confiança e demonstrem que estou preparado para enfrentar novos desafios e contribuir significativamente para qualquer equipe ou projeto. Se você está à procura de um desenvolvedor dedicado, criativo e apaixonado pelo que faz, estou à disposição para conversar.<br/><br/>
                Sinta-se à vontade para explorar meus projetos e entrar em contato. Estou ansioso para colaborar e fazer a diferença através da tecnologia.</p>
            </div>
        </div>
    );
}