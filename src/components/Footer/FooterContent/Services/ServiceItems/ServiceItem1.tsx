import '../../../../../css/App.css';
import GardenCare from '../../../../../images/png_images/GardenCare.png';

function ServiceItem1() {
    return (
        <>
            <div className="service-item">
                <img src={GardenCare} alt="Garden Care" />
                <h3 className="services-title">Garden Care</h3>
                <p className="services-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
        </> 
    )
}

export default ServiceItem1;