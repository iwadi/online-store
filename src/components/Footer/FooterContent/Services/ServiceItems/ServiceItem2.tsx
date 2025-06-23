import '../../../../../css/App.css';
import PlantRenovation from '../../../../../images/png_images/PlantRenovation.png';

function ServiceItem2() {
    return (
        <>
            <div className="service-item">
                <img src={PlantRenovation} alt="Plant Renovation"/>
                <h3 className="services-title">Plant Renovation</h3>
                <p className="services-text">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
        </> 
    )
}

export default ServiceItem2;