import '../../css/App.css';
import FooterContent from './FooterContent/FooterContent';
import FooterBottom from './FooterContent/FooterBottom/FooterBottom';

function Footer() {
    return (
        <>
            <footer className="Footer">
                <div className="container">
                    <FooterContent />
                    <FooterBottom />
                </div>
            </footer>
        </> 
    )
}

export default Footer;