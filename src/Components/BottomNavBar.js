// BottomNavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { FaHome, FaSearch, FaPlusSquare, FaUserCircle } from 'react-icons/fa';

const BottomNavBar = () => {
    const { user } = useAuth();

    return (
        <div className="bottom-nav-bar">
            <Link to="/" className="nav-icon">
                <FaHome />
            </Link>
            <Link to="/search" className="nav-icon">
                <FaSearch />
            </Link>
            {user?.type === 'newsProvider' && (
                <Link to="/post" className="nav-icon">
                    <FaPlusSquare />
                </Link>
            )}
            {user && (
                <Link to="/profile" className="nav-icon profile-icon">
                    <FaUserCircle />
                </Link>
            )}
            {!user && (
                <Link to="/login" className="nav-icon profile-icon">
                    Login
                </Link>
            )}
        </div>
    );
};

export default BottomNavBar;
