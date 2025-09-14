import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navigation.scss";

const Navigation = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(getActiveTab(location.pathname));

    function getActiveTab(path: string) {
        if (path === "/") return 1;
        if (path === "/projects") return 2;
        if (path === "/blog") return 3;
        return 1;
    }

    useEffect(() => {
        setActiveTab(getActiveTab(location.pathname));
    }, [location]);

    return (
        <div className="container">
            <div className="tabs">
                <Link to="/" className="tab" onClick={() => setActiveTab(1)}>
                    Experience
                </Link>
                <Link
                    to="/projects"
                    className="tab"
                    onClick={() => setActiveTab(2)}
                >
                    Projects
                </Link>
                <Link
                    to="/blog"
                    className="tab"
                    onClick={() => setActiveTab(3)}
                >
                    Blog
                </Link>

                <span
                    className="glider"
                    style={{
                        transform: `translateX(${(activeTab - 1) * 100}%)`,
                    }}
                ></span>
            </div>
        </div>
    );
};

export default Navigation;
