import '../../../../../css/App.css';
import WateringGraden from '../../../../../images/png_images/WateringGraden.png';

function ServiceItem3() {
    return (
        <>
            <div className="service-item">
                <img src={WateringGraden} alt="Watering Graden"/>
                <h3 className="services-title">Watering Garden</h3>
                <p className="services-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
        </> 
    )
}

export default ServiceItem3;