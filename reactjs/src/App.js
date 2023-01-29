import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthService from "./services/auth.service";

// Pages
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Bike from "./pages/Bike";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "./App.css";

function App() {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const logout = () => {
        AuthService.logout();
    };
    return (
        <div>
            {/* <div>
                {currentUser === false ? (
                    <h2>Logged In</h2>
                ) : (
                    <h2>Logged Out</h2>
                )}
            </div> */}
            <section>
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/signup" exact element={<SignUp />} />
                    <Route path="/bikes/:id" exact element={<Bike />} />
                    <Route path="/dashboard" exact element={<Dashboard />} />
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
