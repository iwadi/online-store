import './ProductCheckout.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductCheckout_Content from './ProductCheckoutContent/ProductCheckout_Content';

function ProductCheckout() {
    return (
        <>
            <div className="body-wraper">
                <Header />
                <ProductCheckout_Content />
                <Footer />
            </div>
        </>
    )
}

export default ProductCheckout;