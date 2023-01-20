import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const API_BASE =
        process.env.NODE_ENV === "development"
            ? "http://localhost:2000/api/v1"
            : process.env.REACT_APP_BASE_URL;
    let ignore = false;
    useEffect(() => {
        if (!ignore) {
            getBikes();
        }
        return () => {
            ignore = true;
        };
    }, []);
    const getBikes = async () => {
        try {
            await fetch(`${API_BASE}/bikes`)
                .then((res) => res.json())
                .then((data) => {
                    console.log({ data });
                    setBikes(data);
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bike</h1>
                <ul>
                    <li>Bikes</li>
                </ul>
            </header>
        </div>
    );
}

export default App;
