import '../../../css/App.css';
import { Link } from "react-router-dom";

function Logo() {
    return (
        <>
            <div className="logo">
                <Link to="/">
                    <a href="#">
                        <img src="/images/logo/GREENSHOP.png" alt="GREENSHOP" />
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Logo;