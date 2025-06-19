// import React from "react";
import "../Modal/ModalWindow.css";
import { useCart } from "../../../context/CartContext";
import { products } from "../../../productsData";
import CrossGreen from '../../../../images/svg_elements/Elements/CrossGreen.svg';
import ThankYou from '../../../../images/png_images/ThankYou.png';

function ModalWindow({
    active,
    setActive,
    paymentMethod,
}: {
    active: boolean;
    setActive: (active: boolean) => void;
    paymentMethod: string;
}) {
    const { cart } = useCart();
    const subtotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    const shipping = 16.00;
    const total = subtotal + shipping;

    const orderNumber = Math.floor(10000000 + Math.random() * 90000000).toString();
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className={active ? "Modal active" : "Modal"} onClick={() => setActive(false)}>
            <div className="Modal-content" onClick={e => e.stopPropagation()}>
                <div className="up">
                    <div className="content-up">
                        <div className="button-close" onClick={() => setActive(false)}>
                            <img src={CrossGreen} alt="Close" />
                        </div>
                        <div className="center-up">
                            <img className="img-up" src={ThankYou} alt="Thank You" />
                            <p className="text-up">Your order has been received</p>
                        </div>
                    </div>
                </div>
                <div className="basic">
                    <div className="all-data">
                        <div className="data">
                            <p className="text-data">Order Number<span>{orderNumber}</span></p>
                        </div>
                        <div className="border-data"></div>
                        <div className="data">
                            <p className="text-data">Date<span>{currentDate}</span></p>
                        </div>
                        <div className="border-data"></div>
                        <div className="data">
                            <p className="text-data">Total<span>${total.toFixed(2)}</span></p>
                        </div>
                        <div className="border-data"></div>
                        <div className="data">
                            <p className="text-data">Payment Method<span>{paymentMethod}</span></p>
                        </div>
                    </div>
                    <div className="order-details">
                        <h2 className="title-order-details">Order Details</h2>
                        <div className="products">
                            <div className="text">
                                <h3 className="title-text">Products</h3>
                                <div className="div-title-text">
                                    <h3 className="title-text">Qty</h3>
                                    <h3 className="title-text">Subtotal</h3>
                                </div>
                            </div>
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
                        </div>
                        <div className="content-result">
                            <div className="text-result">
                                <h3 className="name-title">Shiping</h3>
                                <h2 className="sum-title">${shipping.toFixed(2)}</h2>
                            </div>
                            <div className="text-result">
                                <h3 className="name-title"><span className="fatty">Total</span></h3>
                                <h2 className="sum-title"><span className="result">${total.toFixed(2)}</span></h2>
                            </div>
                        </div>
                        <div className="bottom">
                            <p className="text-bottom">Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                            <button className="button-bottom" onClick={() => setActive(false)}>Track your order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;