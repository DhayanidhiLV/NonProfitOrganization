// const express = require('express');
// const router = express.Router();
// const Contact = require('../models/Contact');

// router.post('/', async (req, res) => {
//     try {
//         const { name, email, message } = req.body;

//         if (!name || !email || !message) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         const newContact = new Contact({ name, email, message });
//         await newContact.save();

//         res.status(201).json({ message: 'Contact form submitted successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error saving contact message:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
