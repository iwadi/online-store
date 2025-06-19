import { Link } from "react-router-dom";

function ButtonsChoice() {
    return (
        <>
            <div className="buttons-choice">
                <Link to="/productcheckout">
                    <button className="choice_1">Proceed To Checkout</button>
                </Link>
                <a href="#" className="choice_2">Continue Shopping</a>
            </div>
        </>
    )
}

export default ButtonsChoice;