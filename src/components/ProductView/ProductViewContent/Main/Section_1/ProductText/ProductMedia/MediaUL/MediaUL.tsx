// img content 
import FacebookBlack from '../../../../../../../../images/svg_elements/SocialMedia/FacebookBlack.svg';
import TwitterBlack from '../../../../../../../../images/svg_elements/SocialMedia/TwitterBlack.svg';
import LinkedinBlack from '../../../../../../../../images/svg_elements/SocialMedia/LinkedinBlack.svg';
import Email from '../../../../../../../../images/svg_elements/SocialMedia/Email.svg';

function MediaUL() {
    return (
        <>
            <ul className="media-ul">
                <a href="#">
                    <li className="media-li">
                        <img src={FacebookBlack} alt="Facebook" />
                    </li>
                </a>
                <a href="#">
                    <li className="media-li">
                        <img src={TwitterBlack} alt="Twitter" />
                    </li>
                </a>
                <a href="#">
                    <li className="media-li">
                        <img src={LinkedinBlack} alt="Linkedin" />
                    </li>
                </a>
                <a href="#">
                    <li className="media-li">
                        <img src={Email} alt="Email" />
                    </li>
                </a>
            </ul>
        </>
    )
}

export default MediaUL;