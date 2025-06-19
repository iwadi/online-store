import '../../../../css/App.css';
import ServiceItem1 from './ServiceItems/ServiceItem1';
import ServiceItem2 from './ServiceItems/ServiceItem2';
import ServiceItem3 from './ServiceItems/ServiceItem3';
import NewsletterForm from './NewsletterForm/NewsletterForm'

function Services() {
    return (
        <>
            <div className="services">
                <ServiceItem1 />
                
                <div className="services-line"></div>

                <ServiceItem2 />

                <div className="services-line"></div>

                <ServiceItem3 />

                <div className="newsletter">
                    <h3 className="services-title">Would you like to join newsletters?</h3>
                    <NewsletterForm />
                    <p className="newsletter-text">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
                </div>
            </div>
        </> 
    )
}

export default Services;