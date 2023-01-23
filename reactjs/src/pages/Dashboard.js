import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import bikeImage2 from "../images/bikeImage2.jpeg";

function Dashboard() {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [values, setValues] = useState({
        brand: "",
        speed: "",
        color: "",
    });

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
    const createBike = async () => {
        try {
            await fetch(`${API_BASE}/bikes`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then(() => getBikes());
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        createBike();
    };
    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };
    return (
        <div className="App">
            <header style={style.header}>
                <h1 style={style.headerH1}>Bike Shop</h1>
            </header>
            <main className="App-header">
                <img src={bikeImage2} alt="" />
                <h1>Dashboard</h1>
                <Link to="/">Home</Link>
                <ul>
                    {bikes &&
                        bikes.map((bike) => (
                            <ul key={bike._id}>
                                <Link to={`/bikes/${bike._id}`}>
                                    {bike.brand}
                                </Link>
                            </ul>
                        ))}
                </ul>

                <form onSubmit={(event) => handleSubmit(event)}>
                    <label>
                        Brand:
                        <input
                            type="text"
                            name="brand"
                            value={values.brand}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Speed:
                        <input
                            type="text"
                            name="speed"
                            value={values.speed}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Color:
                        <input
                            type="text"
                            name="color"
                            value={values.color}
                            onChange={handleInputChange}
                        />
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </main>
        </div>
    );
}

export default Dashboard;

const style = {
    header: {
        height: "100px",
        textAlign: "center",
        backgroundColor: "maroon",
    },
    h1: {
        color: "red",
    },
    headerH1: {
        paddingTop: "20px",
    },
};
