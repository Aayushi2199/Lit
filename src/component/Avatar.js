import React from 'react';
import './Avatar.css'; // Import the CSS file for styling

const Avatar = ({ username, onSignOut }) => {
    return (
        <div className="avatar-container">
            <div className="avatar">
                {/* Placeholder for avatar image */}
                <img src="https://images.app.goo.gl/fuVh3Cjx3oKep5wJ7" alt="User Avatar" className="avatar-image" />
            </div>
            <div className="user-info">
                <span className="username">{username}</span>
                <button onClick={onSignOut} className="sign-out-button">Sign Out</button>
            </div>
        </div>
    );
};

export default Avatar;
