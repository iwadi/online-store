import { Product } from '../../../../../types/types';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductDetailsText from './ProductDetailsText/ProductDetailsText';
import ProductSize from './ProductSize/ProductSize';
import ProductBuy from './ProductBuy/ProductBuy';
import ProductData from './ProductData/ProductData';
import ProductMedia from './ProductMedia/ProductMedia';

interface ProductTextProps {
    product: Product;
}

function ProductText({ product }: ProductTextProps) {
    return (
        <>
            <div className="product-text">
                <ProductDetails />
                <ProductDetailsText />
                <ProductSize />
                <ProductBuy 
                    product={product} 
                />
                <ProductData />
                <ProductMedia />
            </div>
        </>
    )
}

export default ProductText;