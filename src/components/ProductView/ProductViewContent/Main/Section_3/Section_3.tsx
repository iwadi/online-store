import '../../ProductViewContent.css';
import Section_3UL from './Section_3UL/Section_3UL';
import Pagination from './Pagination/Pagination';

function Section_3() {
    return (
        <>
            <section className="section_3">
                <div className="container">
                    <h2 className="section_3-h2">Releted Products</h2>
                    <Section_3UL />
                    <Pagination />
                </div>
            </section>
        </>
    )
}

export default Section_3;