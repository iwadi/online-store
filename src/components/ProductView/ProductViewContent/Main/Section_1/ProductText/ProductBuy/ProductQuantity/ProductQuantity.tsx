import { useState } from 'react';

interface ProductQuantityProps {
    initialQuantity?: number;
    onIncrease?: () => void;
    onDecrease?: () => void;
    isControlled?: boolean;
}

function ProductQuantity({ 
    initialQuantity = 1, 
    onIncrease, 
    onDecrease, 
    isControlled = false 
}: ProductQuantityProps) {
    const [localQuantity, setLocalQuantity] = useState(initialQuantity);

    const handleIncrease = () => {
        if (isControlled) {
            onIncrease?.();
        } else {
            setLocalQuantity(prev => prev + 1);
        }
    };

    const handleDecrease = () => {
        if (isControlled) {
            onDecrease?.();
        } else {
            setLocalQuantity(prev => Math.max(1, prev - 1));
        }
    };

    const quantity = isControlled ? initialQuantity : localQuantity;

    return (
        <div className="product-quantity">
            <button className="quantity-button" onClick={handleDecrease}>-</button>
            <span className="quantity-number">{quantity}</span>
            <button className="quantity-button" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default ProductQuantity;