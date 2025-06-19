import './ProductCartContent/ProductCartContent.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductCartContent from './ProductCartContent/ProductCartContent';

function ProductCart() {
    return (
        <>
            <div className="body-wraper">
                <Header />
                <ProductCartContent />
                <Footer />
            </div>
        </>
    )
}

export default ProductCart;