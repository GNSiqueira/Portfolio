import './NavBar.css';

export default function NavBar(){
    return(
        <nav className='navbar'>
            <h1>Gabriel <strong>Neto</strong></h1>
            <div className='pages'>
                <a href="/">Home</a>
                <a href="/about">About me</a>
                <a href="/info">Information</a>
            </div>
            <a href="/contact">Contact</a>
        </nav>
    );
}