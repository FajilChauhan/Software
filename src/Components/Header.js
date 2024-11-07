// Header.js
import React from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Header = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogin = (userType) => {
        navigate(`/login?role=${userType}`); // Navigate to login page with role as query parameter
    };

    const handlepost = () => {
        navigate(`/handlepost`); // Navigate to login page with role as query parameter
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <h1>NewsBuzz</h1>
            </div>
            <div className="navbar-center">
                <input type="text" placeholder="Search..." className="search-bar" />
            </div>
            <div className="navbar-right">
                {user ? (
                    <div className="profile-section">
                        <span>Welcome, {user.name || (user.type === 'newsProvider' ? 'News Provider' : 'User')}!</span>
                        <button onClick={handlepost}>Post</button>
                        <button onClick={logout}>Logout</button>
                    </div>
                ) : (
                    <div className="auth-options">
                        <button onClick={() => handleLogin('user')}>Login As User</button>
                        <button onClick={() => handleLogin('newsProvider')}>Login As News Provider</button>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
