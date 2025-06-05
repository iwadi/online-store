import { useCart } from '../../../../../../../context/CartContext';
import { Product } from '../../../../../../../types/types';

interface ProductButtonsProps {
    product: Product;
}

function ProductButtons({ product, }: ProductButtonsProps) {
    const { addToCart } = useCart();

    // const handleAddToCart = () => {
    //     addToCart(product, quantity);
    // };
    
    return (
        <>
            <div className="product-buttons">
                <button className="button-buy">BUY NOW</button>
                {/* <button className="button-add" onClick={handleAddToCart}>ADD TO CART</button> */}
                <button className="button-add" onClick={() => addToCart(product)}>ADD TO CART</button>
                {/* <button className="button-favorites">
                    <img src="/images/svg_elements/Elements/heartGreen.svg" alt="Favorites" />
                </button> */}
            </div>
        </>
    )
}

export default ProductButtons;