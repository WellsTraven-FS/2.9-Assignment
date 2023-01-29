import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

import "../App.css";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async (event) => {
        event.preventDefault();
        try {
            // await service
            await AuthService.signup(email, password).then(
                (response) => {
                    navigate("/dashboard");
                },
                (error) => {
                    console.log(error);
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <header className="App-header">
                <h1>Sign Up</h1>
                <Link to="/">Home</Link>
                <form onSubmit={handleSignUp}>
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

                    <button type="submit">Sign Up</button>
                </form>
            </header>
        </div>
    );
}

export default SignUp;
