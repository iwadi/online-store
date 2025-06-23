import ProductQuantity from '../../../../ProductView/ProductViewContent/Main/Section_1/ProductText/ProductBuy/ProductQuantity/ProductQuantity';
import TextProduct from './Products/Product_1/TextProduct/TextProduct';
import Delete from './Products/Product_1/Delete/Delete';
import { useCart } from "../../../../context/CartContext";

function Goods() {
    const { cart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="goods">
            {cart.length === 0 ? (
                <p className="empty">Return to Home for shopping</p>
            ) : (
                cart.map(item => (
                    <div className="Product" key={item.product.id}>
                        <div className="img-product">
                            <img src={item.product.img} alt={item.product.name} />
                        </div>
                        <div className="div-product">
                            <TextProduct productId={item.product.id} />
                            <h3 className="title-price">${item.product.price}</h3>
                            <div className="counter-button">
                                <ProductQuantity 
                                    initialQuantity={item.quantity}
                                    onIncrease={() => increaseQuantity(item.product.id)}
                                    onDecrease={() => decreaseQuantity(item.product.id)}
                                    isControlled={true}
                                />
                            </div>
                            <h3 className="final-price">${item.product.price * item.quantity}</h3>
                            <Delete productId={item.product.id} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default Goods;