import styles from "./FooterSuperiore.module.css";
import sfondo from "../src/img/footer-bg.jpg"
import LogoStorto from "../src/img/dc-logo-bg.png"

export default function FooterSuperiore() {
    return (
        <div className={styles.sfondo}>
            <div className="container">
                <div className="d-flex">
                    <div className={styles.col3}>
                        <div className="colsuperiore">
                            <h3>DC COMICS</h3>
                            <ul>
                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>Tv</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                        </div>
                        <div className="colinferiore">
                            <h3>SHOP</h3>
                            <ul>
                                <li>SHOP DC</li>
                                <li>SHOP DC Collectibles</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.col3}>
                        <h3>DC</h3>
                        <ul>
                            <li>Terms of Use</li>
                            <li>Privacy policy(new)</li>
                            <li>AD Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className={styles.col3}>
                        <h3>SITES</h3>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className={styles.col6}>
                        <img src={LogoStorto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}