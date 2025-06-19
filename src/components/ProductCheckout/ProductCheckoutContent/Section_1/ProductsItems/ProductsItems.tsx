// import { useState } from "react";
import { useCart } from "../../../../context/CartContext";
import { products } from "../../../../productsData";

function ProductsItems() {
    const { cart } = useCart();

    if (cart.length === 0) {
        return (
                <h4 className="title-item">
                    <span className="title-item-span">
                        <span>Your cart is empty.</span> 
                        <span>Please add some products to continue.</span>
                    </span>
                </h4>
        )
    };

    return (
        <>
            <div className="products-items">
                {cart.map(item => {
                    const product = products.find(p => p.id === item.product.id);
                    return (
                        <div className="product-item" key={item.product.id}>
                            <div className="img-product">
                                <img src={item.product.img} alt={item.product.name} />
                            </div>
                            <div className="texts-item">
                                <h4 className="title-item">{item.product.name}</h4>
                                <p className="data_item">SKU: <span>{product?.sku || item.product.sku}</span></p>
                            </div>
                            <div className="quantity">
                                (x {item.quantity})
                            </div>
                            <div className="price">
                                ${(item.product.price * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ProductsItems;