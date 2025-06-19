import '../../../../../css/App.css';
// img content
import Facebook from '../../../../../images/svg_elements/SocialMedia/Facebook.svg';
import Instagram from '../../../../../images/svg_elements/SocialMedia/Instagram.svg';
import Twitter from '../../../../../images/svg_elements/SocialMedia/Twitter.svg';
import Linkedin from '../../../../../images/svg_elements/SocialMedia/Linkedin.svg';
import Union from '../../../../../images/svg_elements/SocialMedia/Union.svg';

function SocialIcons() {
    return (
        <>
            <ul className="social-icons">
                <a href="#">
                    <li className="social-box">
                        <img src={Facebook} alt="Facebook"/>   
                    </li>
                </a>
                <a href="#">
                    <li className="social-box">
                        <img src={Instagram} alt="Instagram"/>
                    </li>
                </a>
                <a href="#">
                    <li className="social-box">
                        <img src={Twitter} alt="Twitter"/>
                    </li>
                </a>
                <a href="#">
                    <li className="social-box">
                        <img src={Linkedin} alt="LinkedIn"/>
                    </li>
                </a>
                <a href="#">
                    <li className="social-box">
                        <img src={Union} alt="Pinterest"/>
                    </li>
                </a>
            </ul>
        </> 
    )
}

export default SocialIcons;