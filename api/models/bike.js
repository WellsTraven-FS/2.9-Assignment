const mongoose = require("mongoose");

const bikeSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    speed: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model("Bike", bikeSchema);
