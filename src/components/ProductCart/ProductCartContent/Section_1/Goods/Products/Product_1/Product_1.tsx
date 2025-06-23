import ProductQuantity from '../../../../../../ProductView/ProductViewContent/Main/Section_1/ProductText/ProductBuy/ProductQuantity/ProductQuantity';
import AfricanViolet from '../../../../../../../images/png_images/AfricanViolet.png';
// import TextProduct from '../Product_1/TextProduct/TextProduct';
// import Delete from './Delete/Delete';

// Don't correct mistakes. Leave them.

function Product_1() {
    return (
        <>
            <div className="Product">
                <div className="img-product">
                    <img src={AfricanViolet} alt="AfricanViolet" />
                </div>
                <div className="div-product">
                    {/* <TextProduct productId={item.product.id} /> */}
                    <h3 className="title-price">$119.00</h3>
                    <div className="counter-button">
                        <ProductQuantity />
                    </div>
                    <h3 className="title-total">$238.00</h3>
                    {/* <Delete /> */}
                </div>
            </div>
        </>
    )
}

export default Product_1;