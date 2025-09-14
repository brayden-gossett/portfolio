import { useState } from "react";
import "./Navigation.scss";

const Navigation = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="container">
            <div className="tabs">
                <input
                    type="radio"
                    id="radio-1"
                    name="tabs"
                    checked={activeTab === 1}
                    onChange={() => setActiveTab(1)}
                />
                <label className="tab" htmlFor="radio-1">
                    Experience
                </label>

                <input
                    type="radio"
                    id="radio-2"
                    name="tabs"
                    checked={activeTab === 2}
                    onChange={() => setActiveTab(2)}
                />
                <label className="tab" htmlFor="radio-2">
                    Projects
                </label>

                <input
                    type="radio"
                    id="radio-3"
                    name="tabs"
                    checked={activeTab === 3}
                    onChange={() => setActiveTab(3)}
                />
                <label className="tab" htmlFor="radio-3">
                    Blog
                </label>

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
