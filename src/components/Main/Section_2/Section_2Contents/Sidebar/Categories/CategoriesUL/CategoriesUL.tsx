import { useState } from 'react';
import '../../../../../../../css/App.css';
import CategoriesLi from './CategoriesLi';
// import { Product } from '../../../../../../types/types';
import { Products } from '../../../../../../ProductList/ProductList';

interface CategoriesULProps {
    onCategoryChange: (category: string | null) => void;
}

function CategoriesUL({ onCategoryChange }: CategoriesULProps) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // We collect all unique categories from all products
    const allCategories = Array.from(
        new Set(Products.flatMap(product => product.categories))
    );

    // We count the number of products in each category
    const categoryCounts = allCategories.reduce((acc, category) => {
        acc[category] = Products.filter(product => 
            product.categories.includes(category)
        ).length;
        return acc;
    }, {} as Record<string, number>);

    const handleCategoryClick = (category: string) => {
        const newCategory = activeCategory === category ? null : category;
        setActiveCategory(newCategory);
        onCategoryChange(newCategory);
    }

    return (
        <ul className="categories-ul">
            {allCategories.map(category => (
                <CategoriesLi 
                    key={category}
                    category={category}
                    count={categoryCounts[category] || 0}
                    onClick={handleCategoryClick}
                    isActive={activeCategory === category}
                />
            ))}
        </ul>
    );
}

export default CategoriesUL;