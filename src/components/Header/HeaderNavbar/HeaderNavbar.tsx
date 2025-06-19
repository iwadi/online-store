import "../../../css/App.css";
// import { useState } from "react";
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Actions from "./Actions/Actions";
import Search from "../Search/Search";

interface HeaderNavbarProps {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}

function HeaderNavbar({ toggleMenu, isMenuOpen }: HeaderNavbarProps) {
    return (
        <>
            <div className="Header-navbar">
                <Logo />
                <HeaderMenu />
                <Actions />
            </div>
            <Search toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </>
    );
}

export default HeaderNavbar;


// import "../../../css/App.css";
// import { useState } from "react";
// import Logo from './Logo';
// import HeaderMenu from './HeaderMenu';
// import Actions from "./Actions/Actions";
// import Search from "../Search/Search";

// interface HeaderNavbarProps {
//     toggleMenu: () => void;
//     isMenuOpen: boolean;
// }

// function HeaderNavbar({ toggleMenu, isMenuOpen }: HeaderNavbarProps) {
//     const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

//     const toggleSearch = () => {
//         setIsSearchOpen(!isSearchOpen);
//     };

//     return (
//         <div className="Header-navbar">
//             <Logo />
//             <Search 
//                 toggleMenu={toggleMenu} 
//                 isMenuOpen={isMenuOpen} 
//                 isSearchOpen={isSearchOpen} 
//                 toggleSearch={toggleSearch} 
//             />
//             <Actions toggleSearch={toggleSearch} />
//             {!isSearchOpen && <HeaderMenu />}
//         </div>
//     );
// }

// export default HeaderNavbar;