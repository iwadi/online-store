import { useParams } from 'react-router-dom';
import { Products } from '../../../../../../ProductList/ProductList';
import DivRating from './DivRating/DivRating';
import DivPrice from './DivPrice/DivPrice';

function ProductDetails() {
    const { id } = useParams<{ id: string }>();
    const product = Products.find(p => p.id === parseInt(id || ''));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <div className="product-details">
                <div className="product-grade">
                    <h2 className="product-title">{product.name}</h2>
                    <div className="product-rating">
                        <DivPrice price={product.price} />
                        <DivRating />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;