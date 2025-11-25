import BuyDcComics from "../src/img/buy-comics-digital-comics.png";
import BuyDcMerchandise from "../src/img/buy-comics-merchandise.png";
import BuyDcSubscription from "../src/img/buy-comics-subscriptions.png";
import BuyComicShopLocator from "../src/img/buy-comics-shop-locator.png";
import BuyDcPowerVisa from "../src/img/buy-dc-power-visa.svg";
import styles from "./MainInfoSection.module.css";


export default function MainInfoSection() {
    return (
        <div className={styles.infoBar}>
            <div className={styles.infoItem}>
                <img src={BuyDcComics} alt="DIGITAL COMICS" className={styles.icon} />
                <span className={styles.label}>DIGITAL COMICS</span>
            </div>
            <div className={styles.infoItem}>
                <img src={BuyDcMerchandise} alt="DC MERCHANDISE" className={styles.icon} />
                <span className={styles.label}>DC MERCHANDISE</span>
            </div>
            <div className={styles.infoItem}>
                <img src={BuyDcSubscription} alt="SUBSCRIPTION" className={styles.icon} />
                <span className={styles.label}>SUBSCRIPTION</span>
            </div>
            <div className={styles.infoItem}>
                <img src={BuyComicShopLocator} alt="COMIC SHOP LOCATOR" className={styles.icon} />
                <span className={styles.label}>COMIC SHOP LOCATOR</span>
            </div>
            <div className={styles.infoItem}>
                <img src={BuyDcPowerVisa} alt="DC POWER VISA" className={styles.icon} />
                <span className={styles.label}>DC POWER VISA</span>
            </div>
        </div>
    );
}