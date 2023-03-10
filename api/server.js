const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 2000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database Connection Established"));

const bikeRouter = require("./routes/bikes");
app.use(express.json());
app.use("/api/v1/bikes", bikeRouter);

app.use(express.static(path.join(__dirname, "../reactjs/build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../reactjs/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Running on server ${PORT}`);
});
