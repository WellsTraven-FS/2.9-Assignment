import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

import "../App.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // await service
            await AuthService.login(email, password).then(
                (response) => {
                    navigate("/dashboard");
                },
                (error) => {
                    console.error(error);
                }
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <header className="App-header">
                <h1>Login Screen</h1>
                <Link to="/">Home</Link>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </header>
        </div>
    );
}

export default Login;
