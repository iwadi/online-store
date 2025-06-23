import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import basket from '../../../images/svg_elements/Elements/basket.svg';

function Cart() {
    const { cart } = useCart();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <>
            <div className="cart">
                <Link to="/productcart">
                    <a href="#">
                        <span className="cart-icon">
                            <img src={basket} alt="basket"/>
                        </span>
                        <span className="cart-badge">{totalItems}</span>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Cart;