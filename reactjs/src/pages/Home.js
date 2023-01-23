import { Link } from "react-router-dom";
import "../App.css";
import bike from "../images/bikeImage.jpeg";
function Home() {
    return (
        <div className="App">
            <header style={style.header}>
                <h1 style={style.h1}>Bike Shop</h1>
            </header>
            <main className="App-header">
                <img src={bike} alt="" />
                <h1 style={style.font}>Home</h1>
                <Link to="/dashboard">Dashboard</Link>
            </main>
            <footer>
                <p>
                    Copyright &copy; 2023-
                    <script>
                        document.write(new Date().getFullYear())
                    </script>{" "}
                    Traven Wells
                </p>
            </footer>
        </div>
    );
}

export default Home;

const style = {
    header: {
        height: "100px",
        textAlign: "center",
        backgroundColor: "maroon",
    },
    h1: {
        paddingTop: "20px",
    },
    font: {
        color: "red",
    },
};
