import { Link } from 'react-router-dom';
import loupe from '../../../images/svg_elements/Elements/loupe.svg';

function SearchIcon() {
    return (
        <Link to='/SearchPage'>
            <div className="Search-Icon">
                <img src={loupe} alt="loupe" />
            </div>
        </Link>
    );
}

export default SearchIcon;