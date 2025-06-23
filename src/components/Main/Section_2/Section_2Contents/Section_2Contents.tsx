import '../../../../css/App.css';
import Sidebar from './Sidebar/Sidebar';
import ProductGrid from './ProductGrid/ProductGrid';
// import Section_2ContentsText from './Section_2ContentsText/Section_2ContentsText';
import { useState } from 'react';
import { Products } from '../../../ProductList/ProductList';

interface Section_2ContentsProps {
    onPriceChange?: (min: number, max: number) => void;
}

function Section_2Contents({ onPriceChange }: Section_2ContentsProps) {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handlePriceChange = (min: number, max: number) => {
        setPriceRange({ min, max });
        if (onPriceChange) {
            onPriceChange(min, max);
        }
    };

    const handleCategoryChange = (category: string | null) => {
        setSelectedCategory(category);
    };

    const handleSizeChange = (size: string | null) => {
        setSelectedSize(size);
    };

    return (
        <div className="section_2-contents">
            <div className="section_2-contents-flex">
                <Sidebar 
                    onPriceChange={handlePriceChange}
                    onCategoryChange={handleCategoryChange}
                    onSizeChange={handleSizeChange}
                    products={Products}
                />
                <div className="section_2-contents-grid">
                    {/* <Section_2ContentsText /> */}
                    <ProductGrid 
                        minPrice={priceRange.min} 
                        maxPrice={priceRange.max}
                        category={selectedCategory}
                        size={selectedSize}
                        products={Products}
                    />
                </div>
            </div>
        </div>
    );
}

export default Section_2Contents;