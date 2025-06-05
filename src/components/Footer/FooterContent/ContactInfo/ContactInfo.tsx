import '../../../../css/App.css';

function ContactInfo() {
    return (
        <>
            <div className="contact-info">
                <div className="footer-logo">
                    <a href="#">
                        <img src="/images/logo/GREENSHOP.png" alt="GREENSHOP"/>
                    </a>
                </div>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src="/images/svg_elements/Elements/Location.svg" alt="Location Icon"/> 
                        <p className="contact-p"> 70 West Buckingham Ave. Farmingdale, NY 11735 </p>
                    </div>
                    <div className="contact-detail">
                        <img src="/images/svg_elements/Elements/Message.svg" alt="Email Icon"/> 
                        <p className="contact-p"> contact@greenshop.com </p>
                    </div>
                    <div className="contact-detail">
                        <img src="/images/svg_elements/Elements/Calling.svg" alt="Phone Icon"/> 
                        <p className="contact-p"> +88 01911 717 490 </p>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default ContactInfo;