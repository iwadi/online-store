import SearchIcon from "./SearchIcon";
import Cart from "./Cart";
import LoginButton from "../../Header/HeaderNavbar/Actions/LoginButton";

function Actions() {
    return (
        <div className="actions Actions">
            <SearchIcon />
            <Cart />
            <LoginButton />
        </div>
    );
}

export default Actions;