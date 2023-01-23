import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Bike from "./pages/Bike";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/bikes/:id" exact element={<Bike />} />
                <Route path="/dashboard" exact element={<Dashboard />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
