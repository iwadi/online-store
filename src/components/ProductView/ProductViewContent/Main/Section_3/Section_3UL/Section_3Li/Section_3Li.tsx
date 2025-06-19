import Chapters from '../../../../../../Main/Section_2/Section_2Contents/ProductGrid/Сhapters/Сhapters'
// import { useCart } from "../../../../../../context/CartContext";
import { Product } from "../../../../../../types/types";
import { Products } from '../../../../../../ProductList/ProductList';

interface СhaptersProps {
    product: Product[];
}

// product
function Section_3Li({  }: СhaptersProps) {    
    return (
        <>
            {Products.map(product => (
                <li className="section_3-li" tabIndex={0} key={product.id}>
                    <div className="product-img">
                        <div className="image-container" tabIndex={0}>
                            <img className='image-product' src={product.img} alt="Beach Spider Lily" />
                            <div className="chapters-Product-card">
                                <Chapters product={product} />
                            </div>
                        </div>
                    </div>
                    <h4 className="section_3-Product-Name">{product.name}</h4>
                    <h3 className="section_3-Product-Price">${product.price}</h3>
                </li>
            ))}
        </>
    )
}

export default Section_3Li;