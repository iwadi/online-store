import { Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
// img content
import User from '../../../images/svg_elements/Elements/User.svg';
import LocationGrey from '../../../images/svg_elements/Elements/LocationGrey.svg';
import basketGrey from '../../../images/svg_elements/Elements/basketGrey.svg';
import heartGrey from '../../../images/svg_elements/Elements/heartGrey.svg';
import Activity from '../../../images/svg_elements/Elements/Activity.svg';
import Download from '../../../images/svg_elements/Elements/Download.svg';
import Support from '../../../images/svg_elements/Elements/Support.svg';
import Logout from '../../../images/svg_elements/Elements/Logout.svg';

function Sidebar() {
    const { logout } = useAuth();
    return (
        <div className="Sidebar">
            <h2 className="title-sidebar">My Account</h2>
            <div className="sections-sidebar">
                <Link to='/account'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={User} alt="" />
                        <span>Account Details</span>
                    </h3>
                </Link>
                <Link to='/address'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={LocationGrey} alt="" />
                        <span>Address</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={basketGrey} alt="" />
                        <span>Orders</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={heartGrey} alt="" />
                        <span>Wishlist</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={Activity} alt="" />
                        <span>Reports</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={Download} alt="" />
                        <span>Downloads</span>
                    </h3>
                </Link>
                <Link to='*'>
                    <h3 className="chapter-sidebar" tabIndex={0}>
                        <img src={Support} alt="" />
                        <span>Support</span>
                    </h3>
                </Link>
            </div>
            <Link to='/'>
                <button className="Loguot" onClick={logout}>
                    <img src={Logout} alt="" />
                    <span>Logout</span>
                </button>
            </Link>
        </div>
    )
}

export default Sidebar;