import '../../../../../../css/App.css';
import CategoriesUl from './CategoriesUl';
import { useState } from 'react';
import { Product } from '../../../../../types/types';

interface SizeFilterProps {
    onSizeChange: (size: string | null) => void;
    products: Product[];
}

function SizeFilter({ onSizeChange, products }: SizeFilterProps) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    
    const sizes: ('Маленький' | 'Средний' | 'Большой')[] = ['Маленький', 'Средний', 'Большой'];
    
    const getSizeCount = (size: string) => {
        return products.filter(p => p.size === size).length;
    };

    const handleSizeClick = (size: 'Маленький' | 'Средний' | 'Большой') => {
        const newSize = size === selectedSize ? null : size;
        setSelectedSize(newSize);
        onSizeChange(newSize);
    };

    return (
        <div className="size-filter">
            <h2 className="categories-title">Размер</h2>
            <ul className="categories-ul">
                {sizes.map(size => (
                    <CategoriesUl
                        key={size}
                        size={size}
                        count={getSizeCount(size)}
                        isSelected={selectedSize === size}
                        onClick={() => handleSizeClick(size)}
                    />
                ))}
            </ul>
        </div>
    )
}

export default SizeFilter;