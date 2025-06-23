import { products } from '../../../../../productsData';
import Section_3Li from './Section_3Li/Section_3Li';

function Section_3UL() {
    return (
        <>
            <ul className="section_3-ul">
                <Section_3Li product={products} />
            </ul>
        </>
    )
}

export default Section_3UL;