const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Databass Schema

const CartSchema = new Schema({

    Name: { type: String, required: true },
    Cat: { type: String, required: true },
    Price: { type: String, required: true,},
    Image: { type: String, required: true },
    Qty: { type: String, required: true },
    Total: { type: String, required: true },

   

}, {
    timestamps: true,
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;