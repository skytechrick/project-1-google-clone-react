import "../css/footer.css";


export default function Footer() {
    return (
        <footer>
            <div>
                <div style={{fontSize: "15px", textAlign: "left", paddingLeft: "30px", position: "relative", top: "4px"}}>India</div>
            </div>

            <div className="footer-links">

                <div className="footer-links-column">
                    <a href="">Advertising</a>
                    <a href="">Business</a>
                    <a href="">How Search works</a>
                </div>
                
                <div className="footer-links-column">
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                    <a href="">Settings</a>
                </div>

            </div>

        </footer>
    );
}