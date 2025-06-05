import { Product } from '../../../../../types/types';

interface ProductImageMainProps {
    product: Product;
}

function ProductImageMain({ product }: ProductImageMainProps) {
    return (
        <>
            <div className="product-image main">
                <img src={product.img} alt={product.name} />
            </div>
        </>
    )
}

export default ProductImageMain;