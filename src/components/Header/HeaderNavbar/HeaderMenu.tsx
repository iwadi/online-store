import '../../../css/App.css';
import { Link } from "react-router-dom";

function HeaderMenu() {
    return (
        <>
            <ul className="Header-menu">
                <li className="Header-li">
                    <Link to="/">
                        <a href="#">Home</a>
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="/productcart">
                        <a href="#">Shop</a>
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="*">
                        <a href="#">Plant Care</a>
                    </Link>
                </li>
                <li className="Header-li">
                    <Link to="*">
                        <a href="#">Blogs</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default HeaderMenu;