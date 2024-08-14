// const express = require('express');
// const router = express.Router();
// const Donation = require('../models/Donation');

// router.post('/', async (req, res) => {
//     try {
//         const { name, amount, bank, accountNumber, ifscCode, password } = req.body;

//         if (!name || !amount || !bank || !accountNumber || !ifscCode || !password) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         const newDonation = new Donation({ name, amount, bank, accountNumber, ifscCode, password });
//         await newDonation.save();

//         res.status(201).json({ message: 'Donation received successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Donation = require('../models/Donation');

router.post('/', async (req, res) => {
    const { name, amount, bank, accountNumber, ifscCode, password } = req.body;

    try {
        
        const donation = new Donation({
            name,
            amount,
            bank,
            accountNumber,
            ifscCode,
            password
        });

        
        await donation.save();

        res.status(201).json({ message: 'Donation recorded successfully!' });
    } catch (error) {
        console.error('Error saving donation:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
