// import Pages from '../../../ProductView/ProductViewContent/Main/Section_1/Pages/Pages';
import Products from './Products/Products';
import Goods from './Goods/Goods';
import CouponApply from './CouponApply/CouponApply';
import Sum from './Sum/Sum';
import ButtonsChoice from './ButtonsChoice/ButtonsChoice';

function Section_1() {
    return (
        <>
            {/* Section_1 is written with a capital letter. Because some other section_1 is in the way.
                This solved the problem with margin */}
            <section className="Section_1">
                <div className="container">
                    {/* <Pages /> */}
                    <div className="content-section_1">
                        <div className="content-left">
                            <Products />
                            <Goods />
                        </div>
                        <div className="content-right">
                            <div className="cart-totals">
                                <h2 className="cart-title"> Cart Totals </h2>
                                <CouponApply />
                                <Sum />
                                <ButtonsChoice />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section_1;