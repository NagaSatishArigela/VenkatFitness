const db = require('../db');
require('dotenv').config();

// POST /api/reviews - Create a new review with file upload
exports.createReview = async (req, res) => {
  const { rating, name, reviewTitle, reviewText } = req.body;
  const baseUrl = process.env.BASE_URL;
  const photo = req.file ? `${baseUrl}/uploads/${req.file.filename}` : null;

  try {
    const [result] = await db.query(
      'INSERT INTO reviews (rating, name, reviewTitle, reviewText, photo) VALUES (?, ?, ?, ?, ?)',
      [rating, name, reviewTitle, reviewText, photo]
    );
    res.status(201).json({ message: 'Review submitted successfully', photoUrl: photo });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

// GET /api/reviews - Fetch reviews with file URLs
exports.getReviews = async (req, res) => {
  try {
    const [reviews] = await db.query('SELECT * FROM reviews ORDER BY createdAt DESC');
    res.status(200).json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};
