import { useState } from "react";
import ModalWindow from "../../Modal/ModalWindow";
import { useCart } from "../../../../context/CartContext";
import BankСards from '../../../../../images/png_images/BankСards.png';

function Payment() {
    const [modalActive, setModalActive] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<string>("");
    const { cart } = useCart();

    const handlePaymentMethodChange = (method: string) => {
        setPaymentMethod(method);
    };

    const handlePlaceOrder = () => {
        if (cart.length === 0) {
            alert("Your cart is empty. Please add products before placing an order.");
            return;
        }
        if (!paymentMethod) {
            alert("Please select a payment method");
            return;
        }
        setModalActive(true);
    };

    return (
        <>
            <div className="Payment">
                <h2 className="title-payment">Payment Method</h2>
                <div className="methods">
                    <label className="label-method">
                        <input
                            type="radio"
                            name="payment-method"
                            className="input-method"
                            onChange={() => handlePaymentMethodChange("Bank Cards")}
                        />
                        <span className="fake"></span>
                        <span>
                            <img src={BankСards} alt="Bank Cards" />
                        </span>
                    </label>
                    <label className="label-method">
                        <input
                            type="radio"
                            name="payment-method"
                            className="input-method"
                            onChange={() => handlePaymentMethodChange("Direct bank transfer")}
                        />
                        <span className="fake"></span>
                        <span className="text-span">
                            Direct bank transfer
                        </span>
                    </label>
                    <label className="label-method">
                        <input
                            type="radio"
                            name="payment-method"
                            className="input-method"
                            onChange={() => handlePaymentMethodChange("Cash on delivery")}
                        />
                        <span className="fake"></span>
                        <span className="text-span">
                            Cash on delivery
                        </span>
                    </label>
                </div>
                <button
                    className="place-order"
                    onClick={handlePlaceOrder}
                >
                    Place Order
                </button>
                {cart.length > 0 && (
                    <ModalWindow
                        active={modalActive}
                        setActive={setModalActive}
                        paymentMethod={paymentMethod}
                    />
                )}
            </div>
        </>
    );
}

export default Payment;