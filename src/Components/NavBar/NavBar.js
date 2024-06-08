import './NavBar.css';

export default function NavBar(){
    return(
        <nav className='navbar'>
            <h1><a href="/">GNS</a></h1>
            <div className='pages'>
                <ul>
                    <li><a href="/portifolio">Portfolio</a></li>
                    <li><a href="/about">Sobre</a></li>
                    <li><a href="/github">GitHub</a></li>
                </ul>
            </div>
            <a href="https://wa.me/5517997822073" target='_blank' className='contact'><span>Contato</span></a>
        </nav>
    );
}