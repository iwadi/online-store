import '../../../../../css/App.css';
import Section_3Text from './Section_3Text';
import block_2 from '../../../../../images/png_images/block_2.png';

function Block_2() {
    return (
        <>
            <div className="block_2">
                <div className="block_2-img">
                    <img src={block_2} alt="Vasa" />
                </div>
                <Section_3Text />
            </div>
        </>
    )
}

export default Block_2;