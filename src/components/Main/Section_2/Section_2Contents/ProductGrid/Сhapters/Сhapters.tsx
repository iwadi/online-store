import { useCart } from "../../../../../context/CartContext";
import { Product } from "../../../../../types/types";
import { Link } from 'react-router-dom';
import basket from '../../../../../../images/svg_elements/Elements/basket.svg';
import loupe from '../../../../../../images/svg_elements/Elements/loupe.svg';

interface СhaptersProps {
    product: Product;
}

function Сhapters({ product }: СhaptersProps) {
    const { addToCart } = useCart();

    // const handleAddToCart = () => {
    //     addToCart(product, quantity);
    // };

    return (
        <>
            <div className="chapter" tabIndex={0} onClick={() => addToCart(product)}>
                <img src={basket} alt="Добавить в корзину" />
            </div>
            {/* <div className="chapter" tabIndex={0}>
                <img src="/images/svg_elements/Elements/heart.svg" alt="Добавить в избранное" />
            </div> */}
            <Link to={`/product/${product.id}`} key={product.id} className="product-card-link">
                <div className="chapter" tabIndex={0}>
                    <img src={loupe} alt="Быстрый просмотр" />
                </div>
            </Link>
        </>
    );
}

export default Сhapters;