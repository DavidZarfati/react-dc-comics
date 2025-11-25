import styles from "./FooterInferiore.module.css"

export default function FooterInferiore() {
    return (
        <footer className="d-flex justify-content-space-between">
            <div className="container d-flex justify-content-space-between">
                <div className="leftFooter d-flex align-items-center">
                    <button>SIGN-UP NOW</button>
                </div>
                <div className="rightFooter d-flex align-items-center">
                    <h4>Follow US</h4>
                    <img src="../src/img/footer-facebook.png" alt="" />
                    <img src="../src/img/footer-twitter.png" alt="" />
                    <img src="../src/img/footer-youtube.png" alt="" />
                    <img src="../src/img/footer-pinterest.png" alt="" />
                    <img src="../src/img/footer-periscope.png" alt="" />
                </div>
            </div>
        </footer>
    )
}