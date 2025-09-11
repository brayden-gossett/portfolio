import "../App.css";
import headshot from "../assets/headshot.png";

function Hero() {
    return (
        <div className="hero-section">
            <div className="words">
                <h1>Brayden Gossett</h1>
                <h3 className="thing2">An almost Software Developer</h3>
                <div className="description">
                    <p>
                        A 15 year old who enjoys programming and computers too
                        much
                        <br /> My back hurts from sitting at my desk to much
                        <br /> But at least it's fun...sometimes
                        <br /> Give me a job. Please. I am begging you.
                        <br /> I know how to Google the answers 😭
                    </p>
                </div>
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

export default Hero;
