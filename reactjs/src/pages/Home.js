import { Link } from "react-router-dom";
import "../App.css";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Bike Home List</h1>
                <Link to="/dashboard">Dashboard</Link>
                <ul>
                    <li>Bikes</li>
                </ul>
            </header>
        </div>
    );
}

export default Home;
