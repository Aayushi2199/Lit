import React from 'react';
import './Navigation.css'; // Import the CSS file for styling
import Avatar from './Avatar'; // Import the Avatar component

const Navigation = ({ username, onSignOut }) => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
<span>Welcome Sidharth</span>
            </div>
            <div className="navbar-right">
                <Avatar username={username} onSignOut={onSignOut} />
            </div>
        </nav>
    );
};

export default Navigation;