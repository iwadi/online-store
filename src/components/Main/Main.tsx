import '../../css/App.css';
import Section_1 from './Section_1/Section_1';
import Section_2 from './Section_2/Section_2';
import Section_3 from './Section_3/Section_3';
import Section_4 from './Section_4/Section_4';

function Main() {
    const handlePriceChange = (min: number, max: number) => {
        console.log(`Price range changed: ${min} - ${max}`);
    };

    return (
        <>
            <main>
                <Section_1 />
                <Section_2 onPriceChange={handlePriceChange} />
                <Section_3 />
                <Section_4 />
            </main>
        </>
    )
}

export default Main;