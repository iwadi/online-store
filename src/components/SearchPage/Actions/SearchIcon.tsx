import { Link } from 'react-router-dom'

function SearchIcon() {
    return (
        <Link to='/SearchPage'>
            <div className="Search-Icon">
                <img src="images/svg_elements/Elements/loupe.svg" alt="loupe" />
            </div>
        </Link>
    );
}

export default SearchIcon;