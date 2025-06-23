import React, { useState, useEffect } from 'react';

interface PriceFilterProps {
    onPriceChange: (min: number, max: number) => void;
    initialMin?: number;
    initialMax?: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ 
    onPriceChange, 
    initialMin = 0, 
    initialMax = 250,
}) => {
    const [minPrice, setMinPrice] = useState(initialMin);
    const [maxPrice, setMaxPrice] = useState(initialMax);

    const maxRange = initialMax;

    useEffect(() => {
        setMinPrice(initialMin);
        setMaxPrice(initialMax);
    }, [initialMin, initialMax]);

    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const newMin = Math.min(value, maxPrice);
        setMinPrice(newMin);
        onPriceChange(newMin, maxPrice);
    };

    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        const newMax = Math.max(value, minPrice);
        setMaxPrice(newMax);
        onPriceChange(minPrice, newMax);
    };

    const minPercent = (minPrice / maxRange) * 100;
    const maxPercent = (maxPrice / maxRange) * 100;
    const trackStyle = {
        left: `${minPercent}%`,
        width: `${maxPercent - minPercent}%`,
    };

    return (
        <div className="price-filter">
            <h2 className="title-filter">Price Range</h2>
            <div className="slider-container">
                <div className="slider-range" style={trackStyle}></div>
                <input
                    type="range"
                    min="0"
                    max={maxRange}
                    value={minPrice}
                    onChange={handleMinChange}
                    className="slider"
                />
                <input
                    type="range"
                    min="0"
                    max={maxRange}
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="slider"
                />
            </div>
            <div className="price-text">
                Price: <span>${minPrice} - ${maxPrice}</span>
            </div>
        </div>
    );
};

export default PriceFilter;