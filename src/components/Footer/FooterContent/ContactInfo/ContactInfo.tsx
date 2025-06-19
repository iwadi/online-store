import '../../../../css/App.css';
// img content
import GREENSHOP from '../../../../images/logo/GREENSHOP.png';
import Location from '../../../../images/svg_elements/Elements/Location.svg';
import Message from '../../../../images/svg_elements/Elements/Message.svg';
import Calling from '../../../../images/svg_elements/Elements/Calling.svg';

function ContactInfo() {
    return (
        <>
            <div className="contact-info">
                <div className="footer-logo">
                    <a href="#">
                        <img src={GREENSHOP} alt="GREENSHOP"/>
                    </a>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={Location} alt="Location Icon"/> 
                        <p className="contact-p"> 70 West Buckingham Ave. Farmingdale, NY 11735 </p>
                    </div>
                    <div className="contact-detail">
                        <img src={Message} alt="Email Icon"/> 
                        <p className="contact-p"> contact@greenshop.com </p>
                    </div>
                    <div className="contact-detail">
                        <img src={Calling} alt="Phone Icon"/> 
                        <p className="contact-p"> +88 01911 717 490 </p>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default ContactInfo;