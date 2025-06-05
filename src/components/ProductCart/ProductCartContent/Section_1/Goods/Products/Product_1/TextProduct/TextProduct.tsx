import { useCart } from "../../../../../../../context/CartContext";
import { products } from "../../../../../../../productsData";

interface TextProductProps {
    productId: number;
}

function TextProduct({ productId }: TextProductProps) {
    const { cart } = useCart();
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);
    
    if (!product || !cartItem) return null;

    const totalPrice = product.price * cartItem.quantity;

    return (
        <div className="text-product">
            <h3 className="title-product">{product.name}</h3>
            <p className="data-text">SKU: <span>{product.sku}</span></p>
            <p className="data-text size">Size: <span>M</span></p>
            <h3 className="title-total_two">${totalPrice}</h3>
        </div>
    )
}

export default TextProduct;