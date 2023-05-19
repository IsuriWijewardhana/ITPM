const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const vegetableSchema = new Schema({
    Name: { type: String, required: true },
    Cat: { type: String, required: true },
    Price: { type: String, required: true },
    Description: { type: String, required: true },
    Image: { type: String},
   


}, {
    timestamps: true,
});



const vegetable = mongoose.model('vegetable', vegetableSchema);

module.exports = vegetable;