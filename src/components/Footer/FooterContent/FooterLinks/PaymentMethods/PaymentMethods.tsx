import '../../../../../css/App.css';
import BankСards from '../../../../../images/png_images/BankСards.png';

function PaymentMethods() {
    return (
        <>
            <div className="payment-methods">
                <a href="#">
                    <img src={BankСards} alt=""/>
                </a>
            </div>
        </> 
    )
}

export default PaymentMethods;