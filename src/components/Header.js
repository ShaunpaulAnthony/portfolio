import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    /* const navigate = useNavigate(); */

    return (
        <>
        <header className="header">
            <div className="header-name">
                <h1>Shaunpaul Anthony</h1>
                <h2>Full Stack Developer</h2>
            </div>
            <div className="header-right">
            <Link to="/about" className="button-link"><button>About</button></Link>
                <Link to="/projects" className="button-link"><button>Projects</button></Link>
                <Link to="/contact" className="button-link"><button>Contact</button></Link>
            </div>
        
        </header>
        </>



    )
}

export default Header;