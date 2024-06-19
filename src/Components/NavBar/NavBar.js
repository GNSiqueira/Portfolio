import './NavBar.css';

export default function NavBar(){
    return(
        <nav className='navbar'>
            <span><a href="/">GNS</a></span>
            <div className='pages'>
                <ul>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/projects">Projetos</a></li>
                </ul>
            </div>
            <a href="https://wa.me/5517997822073" target='_blank' className='contact'><span>Contato</span></a>
        </nav>
    );
}