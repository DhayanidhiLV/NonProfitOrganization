// const mongoose = require('mongoose');

// const DonationSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     amount: { type: Number, required: true },
//     bank: { type: String, required: true },
//     accountNumber: { type: String, required: true },
//     ifscCode: { type: String, required: true },
//     password: { type: String, required: true }, // In production, hash the password
// });

// module.exports = mongoose.model('Donation', DonationSchema);


const mongoose = require('mongoose');

const DonationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    bank: { type: String, required: true },
    accountNumber: { type: String, required: true },
    ifscCode: { type: String, required: true },
    password: { type: String, required: true }, 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('donations', DonationSchema);
