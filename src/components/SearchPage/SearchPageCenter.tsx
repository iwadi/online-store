import SearchPage from './SearchPage.tsx'; 
import Logo from '../Header/HeaderNavbar/Logo.tsx';
import SearchPageHeaderMenu from './SearchPageHeaderMenu.tsx';
import Actions from "./Actions/Actions.tsx";
import './SearchPageCss/SearchPage.css';

interface HeaderNavbarProps {
    // toggleMenu: () => void;
    isMenuOpen: boolean;
}

// toggleMenu
function SearchPageCenter({ isMenuOpen }: HeaderNavbarProps) {
    return (
        <>
            <div className="container">
                <div className="Header-flex">
                    <Logo />
                    <SearchPageHeaderMenu />
                    <Actions />
                </div>
                <div className="separator Separator"></div>
            </div>
            <SearchPage isMenuOpen={isMenuOpen} />
        </>
    )
}

export default SearchPageCenter;