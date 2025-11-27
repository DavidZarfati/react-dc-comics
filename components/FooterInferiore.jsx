
import styles from "./FooterInferiore.module.css"
import facebookIcon from "../src/img/footer-facebook.png";
import twitterIcon from "../src/img/footer-twitter.png";
import youtubeIcon from "../src/img/footer-youtube.png";
import pinterestIcon from "../src/img/footer-pinterest.png";
import periscopeIcon from "../src/img/footer-periscope.png";

export default function FooterInferiore() {
    const classiFooter = "d-flex justify-content-space-between " + styles.footer;
    return (
        <footer className={classiFooter}>
            <div className="container d-flex justify-content-space-between">
                <div className="leftFooter d-flex align-items-center">
                    <button>SIGN-UP NOW</button>
                </div>
                <div className="rightFooter d-flex align-items-center">
                    <h4>Follow US</h4>
                    <img src={facebookIcon} alt="Facebook" />
                    <img src={twitterIcon} alt="Twitter" />
                    <img src={youtubeIcon} alt="YouTube" />
                    <img src={pinterestIcon} alt="Pinterest" />
                    <img src={periscopeIcon} alt="Periscope" />
                </div>
            </div>
        </footer>
    )
}