const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const ProductSchema = new Schema({

    Supid: { type: String, required: true },
    Supcontact: { type: String, required: true },
    Pid: { type: String, required: true,},
    Qty: { type: String, required: true },
    Pname: { type: String, required: true },

}, {
    timestamps: true,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;