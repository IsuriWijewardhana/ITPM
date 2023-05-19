const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  
    Item: { type: String, required: true },
    Cusname: { type: String, required: true },
    Amount: { type: String, required: true },
    Date: { type: String, required: true },
    
}, {
    timestamps: true,
});

const Payment = mongoose.model("Payment", PaymentSchema);

module.exports = Payment;