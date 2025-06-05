// // import { useCart } from "../../../../context/CartContext";
// // import { Products } from '../../../../ProductList/ProductList';
// // import ProductCard from '../ProductGrid/ProductCard';
// // import { useState, useEffect } from 'react';

// // interface ProductGridProps {
// //     minPrice?: number;
// //     maxPrice?: number;
// //     category?: string | null;
// // }

// // function ProductGrid({ minPrice = 0, maxPrice = Infinity, category }: ProductGridProps) {
// //     const [filteredProducts, setFilteredProducts] = useState(Products);

// //     useEffect(() => {
// //         const filtered = Products.filter(product => 
// //         product.price >= minPrice && product.price <= maxPrice
// //         );
// //         setFilteredProducts(filtered);
// //     }, [minPrice, maxPrice]);

// //     return (
// //         <div className="product-grid">
// //         {filteredProducts.map(product => (
// //             <ProductCard key={product.id} product={product} />
// //         ))}
// //         </div>
// //     );
// // }

// // export default ProductGrid;


// import { useCart } from "../../../../context/CartContext";
// import { Products } from '../../../../ProductList/ProductList';
// import ProductCard from '../ProductGrid/ProductCard';
// import { useState, useEffect } from 'react';

// interface ProductGridProps {
//     minPrice?: number;
//     maxPrice?: number;
//     category?: string | null;
// }

// function ProductGrid({ minPrice = 0, maxPrice = Infinity, category = null }: ProductGridProps) {
//     const [filteredProducts, setFilteredProducts] = useState(Products);

//     useEffect(() => {
//         const filtered = Products.filter(product => {
//             // Фильтрация по цене
//             const priceMatch = product.price >= minPrice && product.price <= maxPrice;
            
//             // Фильтрация по категории (если категория выбрана)
//             const categoryMatch = category ? product.category === category : true;
            
//             return priceMatch && categoryMatch;
//         });
        
//         setFilteredProducts(filtered);
//     }, [minPrice, maxPrice, category]);

//     return (
//         <div className="product-grid">
//             {filteredProducts.length > 0 ? (
//                 filteredProducts.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                 ))
//             ) : (
//                 <div className="no-products-message">
//                     Товары по выбранным фильтрам не найдены
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProductGrid;



// import { Product } from '../../../../types/types';
// import ProductCard from '../ProductGrid/ProductCard';

// interface ProductGridProps {
//     minPrice: number;
//     maxPrice: number;
//     category: string | null;
//     size: string | null;
//     products: Product[];
// }

// function ProductGrid({ minPrice, maxPrice, category, size, products }: ProductGridProps) {
//     const filteredProducts = products.filter(product => {
//         const priceMatch = product.price >= minPrice && product.price <= maxPrice;
//         const categoryMatch = !category || product.category === category;
//         const sizeMatch = !size || product.size === size;
        
//         return priceMatch && categoryMatch && sizeMatch;
//     });

//     if (filteredProducts.length === 0) {
//         return <div className="no-products">Товары не найдены. Попробуйте изменить параметры фильтрации.</div>;
//     }

//     return (
//         <div className="product-grid">
//             {filteredProducts.map(product => (
//                 <div key={product.id} className="product-card">
//                     <img src={product.img} alt={product.name} />
//                     <h3>{product.name}</h3>
//                     <p>{product.price} ₽</p>
//                     <p>{product.category}</p>
//                     {product.size && <p>Размер: {product.size}</p>}
//                 </div>
//                 // <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//     );
// }

// export default ProductGrid;

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
                <span>Товары не найдены.</span> 
                <br></br>
                <span>Попробуйте изменить параметры фильтрации.</span>
            </div>;
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