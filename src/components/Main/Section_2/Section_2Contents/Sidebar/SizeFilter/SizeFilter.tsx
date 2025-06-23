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
    
    const sizes: ('Small' | 'Average' | 'Big')[] = ['Small', 'Average', 'Big'];
    
    const getSizeCount = (size: string) => {
        return products.filter(p => p.size === size).length;
    };

    const handleSizeClick = (size: 'Small' | 'Average' | 'Big') => {
        const newSize = size === selectedSize ? null : size;
        setSelectedSize(newSize);
        onSizeChange(newSize);
    };

    return (
        <div className="size-filter">
            <h2 className="categories-title">Size</h2>
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