import React from 'react';
import './Avatar.css'; // Import the CSS file for styling

const Avatar = ({ username, onSignOut }) => {
    const itemStyle = {
        margin: '0 15px',
        color: 'white',
        textDecoration: 'none',
    };

    const rewardPointsStyle = {
        
        fontWeight: 'bold',
        backgroundColor: '#444',
        borderRadius: '2px',
        padding: '5px 10px',
    };
    return (
        <div className="avatar-container">
            <div className="avatar">
                {/* Placeholder for avatar image */}
                <img src="https://images.app.goo.gl/fuVh3Cjx3oKep5wJ7" alt="User Avatar" className="avatar-image" />
            </div>
            <div className="user-info">
                <ul>
                <li className="username">{username}</li>
                <li style={{ ...itemStyle, ...rewardPointsStyle }}>Reward Points: 1200</li>

                <button onClick={onSignOut} className="sign-out-button">Sign Out</button>
                </ul>
            </div>
        </div>
    );
};

export default Avatar;
