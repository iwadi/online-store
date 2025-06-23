import { Product } from '../../../../types/types';
import ProductCard from '../ProductGrid/ProductCard';

interface ProductGridProps {
    minPrice: number;
    maxPrice: number;
    category: string | null;
    size: string | null;
    products: Product[];
}

function ProductGrid({ minPrice, maxPrice, category, size, products }: ProductGridProps) {
    const filteredProducts = products.filter(product => {
        const priceMatch = product.price >= minPrice && product.price <= maxPrice;
        const categoryMatch = !category || product.categories.includes(category);
        const sizeMatch = !size || product.size === size;
        
        return priceMatch && categoryMatch && sizeMatch;
    });

    if (filteredProducts.length === 0) {
        return <div className="no-products">
                <span>No products found.</span> 
                <br></br>
                <span>Try changing your filtering options.</span>
            </div>
    }

    return (
        <div className="product-grid">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductGrid;