import { React, useState } from "react";
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import './tabs.css'


const Tabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="tabs-container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'tab1' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tab1')}
                >
                Recommendations
                </button>
                <button
                    className={`tab-button ${activeTab === 'tab2' ? 'active' : ''}`}
                    onClick={() => setActiveTab('tab2')}
                >
                Portfolio
                </button>
            </div>
            <div className="tab-content">
                {activeTab === 'tab1' && <div className="tab-panel"><Tab1/></div>}
                {activeTab === 'tab2' && <div className="tab-panel"><Tab2/></div>}
                <button className="fancy-button">
            Start Investing
        </button>
            </div>
            
        </div>
    );
};

export default Tabs;