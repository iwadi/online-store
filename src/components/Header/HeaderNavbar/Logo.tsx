import '../../../css/App.css';
import { Link } from "react-router-dom";
import GREENSHOP from '../../../images/logo/GREENSHOP.png';

function Logo() {
    return (
        <>
            <div className="logo">
                <Link to="/">
                    <img src={GREENSHOP} alt="GREENSHOP" />
                </Link>
            </div>
        </>
    )
}

export default Logo;