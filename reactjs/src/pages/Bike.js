import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../App.css";
import bikeImage3 from "../images/bikeImage3.jpeg";

function Bike() {
    const [bikes, setBikes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [values, setValues] = useState({
        brand: "",
        speed: "",
        color: "",
    });

    const { id } = useParams();
    const navigate = useNavigate();

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
            await fetch(`${API_BASE}/bikes/${id}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log({ data });
                    setValues({
                        brand: data.brand,
                        speed: data.speed,
                        color: data.color,
                    });
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
        }
    };
    const deleteBike = async () => {
        try {
            await fetch(`${API_BASE}/bikes/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    setBikes(data);
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
            navigate("/dashboard", { replace: true });
        }
    };
    const updateBike = async () => {
        try {
            await fetch(`${API_BASE}/bikes/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
                .then((res) => res.json())
                .then((data) => {
                    setBikes(data);
                });
        } catch (error) {
            setError(error.message || "Unexpected Error");
        } finally {
            setLoading(false);
            navigate("/dashboard", { replace: true });
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        updateBike(values);
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
                <img src={bikeImage3} about="" style={style.img} />
                <h1>Bike Profile</h1>
                <h5>{values && values.brand}</h5>
                <p>{values && values.speed}</p>
                <p>{values && values.color}</p>
                <button onClick={() => deleteBike()}>Delete Bike</button>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Home</Link>

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

export default Bike;

const style = {
    header: {
        height: "100px",
        textAlign: "center",
        backgroundColor: "maroon",
    },
    h1: {
        paddingTop: "20px",
    },
    headerH1: {
        paddingTop: "20px",
    },
    font: {
        color: "red",
    },
    img: {
        width: "200px",
        height: "200px",
        objectFit: "cover",
        objectPosition: "40%",
        borderRadius: "8rem",
    },
};
