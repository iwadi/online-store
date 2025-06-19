import { Product } from "../../../../../types/types";

interface ProductImagesProps {
    product: Product;
}

function ProductImages({ product }: ProductImagesProps) {
    return (
        <>
            <div className="product-images">
                <div className="product-images lateral">
                    <img src={product.img} alt={product.name} className="images-lateral" />
                    <img src={product.img} alt={product.name} className="images-lateral" />
                    <img src={product.img} alt={product.name} className="images-lateral" />
                    <img src={product.img} alt={product.name} className="images-lateral" />
                </div>
            </div>
        </>
    )
}

export default ProductImages;