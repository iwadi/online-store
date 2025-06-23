// import './SearchPageCss/SearchPage.css';
// import { Link } from "react-router-dom";

// function SearchPageHeaderMenu() {
//     return (
//         <>
//             <ul className="SearchPage-HeaderMenu">
//                 <li className="SearchPage-HeaderLi">
//                     <Link to="/">
//                         <a href="#">Home</a>
//                     </Link>
//                 </li>
//                 <li className="SearchPage-HeaderLi">
//                     <Link to="/productview">
//                         <a href="#">Shop</a>
//                     </Link>
//                 </li>
//                 <li className="SearchPage-HeaderLi">
//                     <Link to="*">
//                         <a href="#">Plant Care</a>
//                     </Link>
//                 </li>
//                 <li className="SearchPage-HeaderLi">
//                     <Link to="*">
//                         <a href="#">Blogs</a>
//                     </Link>
//                 </li>
//             </ul>
//         </>
//     )
// }

// export default SearchPageHeaderMenu;


import './SearchPageCss/SearchPage.css';
import { Link } from "react-router-dom";

function SearchPageHeaderMenu() {
    return (
        <ul className="SearchPage-HeaderMenu">
            <li className="SearchPage-HeaderLi">
                <Link to="/" className="SearchPage-HeaderLink">
                    Home
                </Link>
            </li>
            <li className="SearchPage-HeaderLi">
                <Link to="/productview" className="SearchPage-HeaderLink">
                    Shop
                </Link>
            </li>
            <li className="SearchPage-HeaderLi">
                <Link to="*" className="SearchPage-HeaderLink">
                    Plant Care
                </Link>
            </li>
            <li className="SearchPage-HeaderLi">
                <Link to="*" className="SearchPage-HeaderLink">
                    Blogs
                </Link>
            </li>
        </ul>
    )
}

export default SearchPageHeaderMenu;