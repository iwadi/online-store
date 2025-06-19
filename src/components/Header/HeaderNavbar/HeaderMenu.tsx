import '../../../css/App.css';
import { Link } from "react-router-dom";

function HeaderMenu() {
    return (
        <>
            <ul className="Header-menu">
                <li className="Header-li">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="/productcart">
                        Shop
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="*">
                        Plant Care
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="*">
                        Blogs
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default HeaderMenu;