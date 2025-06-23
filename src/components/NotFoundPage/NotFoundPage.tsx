import './NotFoundPage.css';
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <>
            <div className="content">
                <h2 className="title-content">Not Found Page</h2>
                <Link to="/">
                    <button className="button-back">Вернуться домой</button>
                </Link>
            </div>
        </>
    )
}

export default NotFoundPage;