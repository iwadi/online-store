import '../../../../../css/App.css';
import Arrows from '../../../../../images/svg_elements/Arrows/Arrow3.svg';

function Section_3Text() {
    return (
        <>
            <div className="section_3-text">
                <h2 className="section_3-title">Styling Trends & much more</h2>
                <p className="section_3-p">We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <button className="section_3-button">
                    Find More
                    <img src={Arrows} alt="Arrow" />
                </button>
            </div>
        </>
    )
}

export default Section_3Text;