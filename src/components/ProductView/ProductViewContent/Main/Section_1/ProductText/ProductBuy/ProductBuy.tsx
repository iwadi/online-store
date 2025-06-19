import { Product } from '../../../../../../types/types';
// import ProductQuantity from './ProductQuantity/ProductQuantity';
import ProductButtons from './ProductButtons/ProductButtons';

interface ProductBuyProps {
    product: Product;
}

function ProductBuy({ product }: ProductBuyProps) {
    return (
        <>
            <div className="product-buy">
                {/* <ProductQuantity /> */}
                <ProductButtons 
                    product={product} 
                />
            </div>
        </>
    )
}

export default ProductBuy;