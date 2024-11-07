// Login.js
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import "../CSS/login.css";

const Login = () => {
    const [captcha, setCaptcha] = useState("");
    const [userInput, setUserInput] = useState("");
    const [captchaStatus, setCaptchaStatus] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Extract the role from the URL parameters
    const role = new URLSearchParams(location.search).get('role') || 'user';

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = () => {
        const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*";
        let uniqueChar = "";
        for (let i = 0; i < 5; i++) {
            uniqueChar += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
        }
        setCaptcha(uniqueChar);
        setUserInput("");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (userInput === captcha) {
            login(role); // Log in with the role from URL parameters
            navigate('/'); // Redirect to the feed after login
        } else {
            setCaptchaStatus("Captcha Not Matched");
        }
        generateCaptcha();
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className="captcha-container">
                        <div>
                            <label htmlFor="captcha">Captcha</label>
                            <input
                                type="text"
                                id="captcha"
                                name="captcha"
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Enter Captcha Code"
                                value={userInput}
                                required
                            />
                        </div>
                        <div className="captcha-code">
                            <span>{captcha}</span>
                        </div>
                        <div className="captcha-refresh" onClick={generateCaptcha}>
                            <i className="fas fa-sync-alt"></i>
                        </div>
                        <p id="key">{captchaStatus}</p>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <p>You Have Not Account?</p>
                    <a href="/signup">Sign Up</a>
                </form>
            </div>
        </div>
    );
};

export default Login;
