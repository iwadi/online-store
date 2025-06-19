import '../../../../css/App.css';
import FooterUL1 from './FooterUL/FooterUL1';
import FooterUL2 from './FooterUL/FooterUL2';
import FooterUL3 from './FooterUL/FooterUL3';
import SocialIcons from './SocialIcons/SocialIcons';
import PaymentMethods from './PaymentMethods/PaymentMethods';

function FooterLinks() {
    return (
        <>
            <div className="footer-links">
                <div className="footer-column">
                    <FooterUL1 />
                </div>
                <div className="footer-column">
                    <FooterUL2 />
                </div>
                <div className="footer-column">
                    <FooterUL3 />
                </div>
                <div className="footer-column social">
                    <h3 className="footer-title">Social Media</h3>
                    <SocialIcons />
                    <h3 className="footer-title">We accept</h3>
                    <PaymentMethods />
                </div>
            </div>
        </> 
    )
}

export default FooterLinks;