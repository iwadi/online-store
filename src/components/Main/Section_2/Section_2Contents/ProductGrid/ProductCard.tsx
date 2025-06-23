import '../../../../../css/App.css';
import Сhapters from './Сhapters/Сhapters';
import { Product } from '../../../../types/types';

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="product-card" tabIndex={0} key={product.id}>
            <div className="product-image">
                <img src={product.img} alt={product.name} />
                <div className="chapters-Product-card">
                    <Сhapters product={product} />
                </div>
            </div>
            <div className="product-info">
                <h3 className="title-product-Section_2">{product.name}</h3>
                <div className="div-price">
                    <span className="current-price">{product.price}$</span>
                </div>
                <div className="product-details hidden-but-present">
                    {product.categories.map(category => (
                        <p key={category} className="product-category">{category}</p>
                    ))}
                    {product.size && (
                        <p className="product-size">Size: {product.size}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;