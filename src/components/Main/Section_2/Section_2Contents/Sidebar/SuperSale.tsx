import '../../../../../css/App.css';
import SuperSaleText from '../../../../../images/png_images/SuperSale.png'
import SuperSaleVasa from '../../../../../images/png_images/SuperSaleVasa.png';
import SuperSaleBackground from '../../../../../images/png_images/SuperSaleBackground.png';

function SuperSale() {
    return (
        <>
            <div className="super-sale" style={{ backgroundImage: `url(${SuperSaleBackground})` }}>
                <img src={SuperSaleText} alt="Super Sale" />
                <p className="sale-percentage">UP TO 75% OFF</p>
                <img src={SuperSaleVasa} alt="Lucky Bamboo" />
            </div>
        </>
    )
}

export default SuperSale;