import '../../../../../css/App.css';
import Section_3Text from './Section_3Text';
import block_1 from '../../../../../images/png_images/block_1.png';

function Block_1() {
    return (
        <>
            <div className="block_1">
                <div className="block_1-img">
                    <img src={block_1} alt="Vasa" />
                </div>
                <Section_3Text />
            </div>
        </>
    )
}

export default Block_1;