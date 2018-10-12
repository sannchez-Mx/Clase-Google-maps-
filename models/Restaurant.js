const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    name: String,
    desc: String,
    location: {
        
        // Structura tipíca de un GeoJSON
        
        type: {
            type: String,
            default: "Point"
        },
        coordinates: [Number]
    }
});

// 2dsphere admite consultas que calculan geometrías en una esfera similar a la Tierra.

restaurantSchema.index({location:"2dsphere"});

module.exports = mongoose.model("Restaurant", restaurantSchema);