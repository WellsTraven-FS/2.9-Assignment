const express = require("express");
const router = express.Router();

const Bike = require("../models/bike");

// RESTFULL API

// ------ Middleware ------ //
const getBike = async (req, res, next) => {
    let bike;
    try {
        bike = await Bike.findById(req.params.id);
        if (bike === null) {
            return res.status(404).json({ message: "Bike not found" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    res.bike = bike;
    next();
};

// ------ GET ALL ROUTE ------ //
router.get("/", async (req, res) => {
    try {
        const bikes = await Bike.find();
        res.json(bikes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

    res.send("All Bikes");
});

// ------ GET ONE ROUTE ------ //
router.get("/:id", getBike, async (req, res) => {
    res.json(res.bike);
});

// ------- POST ROUTE ------ //
router.post("/", async (req, res) => {
    const bike = new Bike({
        brand: req.body.brand,
        speed: req.body.speed,
        color: req.body.color,
    });
    try {
        const newBike = await bike.save();
        res.status(201).json(newBike);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// ----- PATCH ROUTE ------- //
router.patch("/:id", getBike, async (req, res) => {
    if (req.body.brand != null) {
        res.bike.brand = req.body.brand;
    }
    if (req.body.speed != null) {
        res.bike.speed = req.body.speed;
    }
    if (req.body.color != null) {
        res.bike.color = req.body.color;
    }
    try {
        const updatedBike = await res.bike.save();
        res.json(updatedBike);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    res.send(`Bike ID: ${req.params.id}`);
});

// ----- DELETE ROUTE ------ //
router.delete("/:id", getBike, async (req, res) => {
    try {
        await res.bike.remove();
        res.json({ message: "Bike Removed" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
