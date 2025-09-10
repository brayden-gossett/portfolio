import "../App.css";

function Header() {
    return (
        <>
            <div className="hero-section">
                <div className="words">
                    <h1>Hello my name is Brayden</h1>
                    <h3 className="thing2"> An almost Software Developer </h3>
                </div>
                <img
                    className="headshot"
                    src="/portfolio/src/assets/headshot.png"
                    width={340}
                    height={420}
                />
            </div>
        </>
    );
}

export default Header;
