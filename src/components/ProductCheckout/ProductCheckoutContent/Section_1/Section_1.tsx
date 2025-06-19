// import Pages from "../../../ProductView/ProductViewContent/Main/Section_1/Pages/Pages";
import BillingAddress from '../BillingAddress/BillingAddress';
import Sum from './Sum/Sum';
import Payment from './Payment/Payment';
import Text from './Text/Text';
import ProductsItems from './ProductsItems/ProductsItems';

function Section_1() {
    return (
        <>
            <section className="section_1">
                <div className="container">
                    {/* <Pages /> */}
                    <div className="container-flex">
                        <BillingAddress />
                        <div className="container-grid">
                            <div className="Order">
                                <h2 className="title-Order">You Order</h2>
                                <div className="products">
                                    <Text />
                                    <ProductsItems />
                                </div>
                            </div>
                            <div className="container-right">
                                <Sum />
                                <Payment />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_1;