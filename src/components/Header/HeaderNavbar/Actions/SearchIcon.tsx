import '../../../../css/App.css';
import { Link } from 'react-router-dom'

function SearchIcon() {
    return (
        <Link to='/SearchPage'>
            <div className="search-icon">
                <img src="/images/svg_elements/Elements/loupe.svg" alt="loupe" />
            </div>
        </Link>
    );
}

export default SearchIcon;