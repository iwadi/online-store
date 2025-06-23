import { useState } from "react";
import "../../css/App.css";
import HeaderNavbar from './HeaderNavbar/HeaderNavbar';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className={`Header ${isMenuOpen ? 'open' : ''}`}>
                <div className="container">
                    <HeaderNavbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                    <div className="separator"></div>
                </div>
            </header>
        </>
    );
}

export default Header;