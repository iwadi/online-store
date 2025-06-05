import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
    const { logout } = useAuth();
    return (
        <div className="Sidebar">
            <h2 className="title-sidebar">My Account</h2>
            <div className="sections-sidebar">
                <Link to='/account'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/User.svg" alt="" />
                        <span>Account Details</span>
                    </h3>
                </Link>
                <Link to='/address'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/LocationGrey.svg" alt="" />
                        <span>Address</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/basketGrey.svg" alt="" />
                        <span>Orders</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/heartGrey.svg" alt="" />
                        <span>Wishlist</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/Activity.svg" alt="" />
                        <span>Reports</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/Download.svg" alt="" />
                        <span>Downloads</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src="images/svg_elements/Elements/Support.svg" alt="" />
                        <span>Support</span>
                    </h3>
                </Link>
            </div>
            <Link to='/'>
                <button className="Loguot" onClick={logout}>
                    <img src="images/svg_elements/Elements/Logout.svg" alt="" />
                    <span>Logout</span>
                </button>
            </Link>
        </div>
    )
}

export default Sidebar;