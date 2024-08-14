// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const connectDB = require('./db'); // Import the connectDB function
// const contactRoutes = require('./routes/contact');
// const donationRoutes = require('./routes/donation');
// const userRoutes = require('./routes/user');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Routes
// app.use('/api/contact', contactRoutes);
// app.use('/api/donation', donationRoutes);
// app.use('/api/users', userRoutes);

// // Connect to MongoDB
// connectDB(); // Call the function to connect to MongoDB

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // Import the connectDB function
const contactRoutes = require('./routes/contact');
const donationRoutes = require('./routes/donation');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/contact', contactRoutes);
app.use('/api/donation', donationRoutes);
app.use('/api/users', userRoutes);

connectDB(); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
