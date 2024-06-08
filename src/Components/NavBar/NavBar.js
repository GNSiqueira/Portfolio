import './NavBar.css';

export default function NavBar(){
    return(
        <nav className='navbar'>
            <h1><a href="">GNS</a></h1>
            <div className='pages'>
                <ul>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">GitHub</a></li>
                </ul>
            </div>
            <a href="#" className='contact'><span>Contact</span></a>
        </nav>
    );
}