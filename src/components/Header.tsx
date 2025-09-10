import "../App.css";
import headshot from "../assets/headshot.png";

function Header() {
    return (
        <div className="hero-section">
            <div className="words">
                <h1>Hello my name is Brayden</h1>
                <h3 className="thing2">An almost Software Developer</h3>
            </div>
            <img
                className="headshot"
                src={headshot}
                width={340}
                height={420}
                alt="Headshot"
            />
        </div>
    );
}

export default Header;
