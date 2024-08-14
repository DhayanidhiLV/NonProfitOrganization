// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// router.post('/register', async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         if (!name || !email || !password) {
//             return res.status(400).json({ error: 'All fields are required' });
//         }

//         const newUser = new User({ name, email, password });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User'); 


router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        user = new User({ name, email, password });

        await user.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
