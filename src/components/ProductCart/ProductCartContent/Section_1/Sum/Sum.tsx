import { useCart } from "../../../../context/CartContext";

function Sum() {
    const { cart } = useCart();
    
    const subtotal = cart.reduce((total, item) => {
        return total + (item.product.price * item.quantity);
    }, 0);
    
    const shipping = 16.00;
    const total = subtotal + shipping;

    return (
        <>
            <div className="sum">
                <div className="sum-data">
                    <h2 className="name-title">Subtotal</h2>
                    <h3 className="sum-title">${subtotal.toFixed(2)}</h3>
                </div>
                <div className="sum-data">
                    <h2 className="name-title">Coupon Discount</h2>
                    <h3 className="sum-title"><span className="zero">(-) 00.00</span></h3>
                </div>
                <div className="sum-data">
                    <h2 className="name-title">Shiping</h2>
                    <h3 className="sum-title">${shipping.toFixed(2)}</h3>
                </div>
                <div className="view-shipping">View shipping charge</div>
                <div className="sum-data">
                    <h2 className="name-title">Total</h2>
                    <h2 className="sum-title"><span className="result">${total.toFixed(2)}</span></h2>
                </div>
            </div>
        </>
    )
}

export default Sum;