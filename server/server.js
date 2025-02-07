const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const reviewRoutes = require('./routes/reviewRoutes');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', reviewRoutes);

app.post("/generateToken", (req, res) => {
    // Validate User Here
    // Then generate JWT Token

    let jwtSecretKey = process.env.JWT_SECRET;
    const payload = {
        username: 'venkatfitness',
        role: 'admin',
        org: 'venkatfitness-org'
      };

    const token = jwt.sign(payload, jwtSecretKey);

    res.send(token);
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
