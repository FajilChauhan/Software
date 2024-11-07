// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/login';
import Feed from './Components/Feed';
import SignUp from './Components/SignUp'
//import Post from './Components/Post';
import { AuthProvider, useAuth } from './Components/AuthContext';
import Handlepost from './Components/Handlepost';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<ProtectedRoute><Feed /></ProtectedRoute>} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/handlepost" element={<Handlepost />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

// Protected Route Component
const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();

    if (!user) {
        return <Feed />;
    }

    return children;
};

export default App;
