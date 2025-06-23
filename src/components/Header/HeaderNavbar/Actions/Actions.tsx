import "../../../../css/App.css";
import SearchIcon from "./SearchIcon";
import Cart from "./Cart";
import LoginButton from "./LoginButton";

function Actions() {
    return (
        <div className="actions">
            <SearchIcon />
            <Cart />
            <LoginButton />
        </div>
    );
}

export default Actions;