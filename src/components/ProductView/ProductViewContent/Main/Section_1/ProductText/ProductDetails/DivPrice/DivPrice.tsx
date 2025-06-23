interface DivPriceProps {
    price?: number;
}

function DivPrice({ price }: DivPriceProps) {
    return (
        <div className="div-price">
            <h3 className="product-price">${price?.toFixed(2)}</h3>
        </div>
    )
}

export default DivPrice;