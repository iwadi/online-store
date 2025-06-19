import { Products } from '../../../../ProductList/ProductList';
// import Pages from './Pages/Pages';
import ProductImages from './ProductImages/ProductImages';
import ProductImageMain from './ProductImageMain/ProductImageMain';
import ProductText from './ProductText/ProductText';

function Section_1({ productId }: { productId: number }) {
    const product = Products.find(p => p.id === productId);
    if (!product) {
        return <div className='container'>
                    Not found Product
                </div>
    }

    return (
        <>
            <section className="section_1-ViewContent">
                <div className="container">
                    {/* <Pages /> */}
                    <div className="product">
                        <div className="product-flex">
                            <div className="div-images">
                                <ProductImages product={product} />
                                <ProductImageMain product={product} />
                            </div>
                            <ProductText 
                                product={product} 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_1;