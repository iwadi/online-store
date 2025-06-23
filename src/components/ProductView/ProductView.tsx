import './ProductViewContent/ProductViewContent.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProductViewContent from './ProductViewContent/ProductViewContent'

function ProductView() {
    return (
        <>
            <div className="body-wraper">
                <Header />
                <ProductViewContent />
                <Footer />
            </div>
        </>
    )
}

export default ProductView;