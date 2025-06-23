import '../../../css/App.css';
import Services from './Services/Services'
import ContactInfo from './ContactInfo/ContactInfo';
import FooterLinks from './FooterLinks/FooterLinks';

function Footer() {
    return (
        <>
            <div className="footer-content">
                <Services />
                <ContactInfo />
                <FooterLinks />
            </div>
        </> 
    )
}

export default Footer;