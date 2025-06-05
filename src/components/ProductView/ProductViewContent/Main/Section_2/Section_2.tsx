import Section_2Buttons from './Section_2Buttons/Section_2Buttons';
import Section_2Text from './Section_2Text/Section_2Text';

function Section_2() {
    return (
        <>
            <section className="Section_2">
                <div className="container">
                    <Section_2Buttons />
                    <Section_2Text />
                </div>
            </section>
        </>
    )
}

export default Section_2;