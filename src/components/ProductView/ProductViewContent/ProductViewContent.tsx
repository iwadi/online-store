import { useParams } from 'react-router-dom';
import Section_1 from './Main/Section_1/Section_1';
import Section_2 from './Main/Section_2/Section_2';
import Section_3 from './Main/Section_3/Section_3';

function ProductViewContent() {
    const { id } = useParams<{ id: string }>();
    const productId = parseInt(id || '0', 10);

    return (
        <>
            <main>
                <Section_1 productId={productId} />
                <Section_2 />
                <Section_3 />
            </main>
        </>
    )
}

export default ProductViewContent;