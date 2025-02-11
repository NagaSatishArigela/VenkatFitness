const db = require('../db');
require('dotenv').config();

// POST /api/reviews - Create a new review with file upload
exports.createReview = async (req, res) => {
  const { rating, name, reviewTitle, reviewText } = req.body;
  const baseUrl = process.env.BASE_URL;

  try {
    const [reviewResult] = await db.query(
      'INSERT INTO reviews (rating, name, reviewTitle, reviewText) VALUES (?, ?, ?, ?)',
      [rating, name, reviewTitle, reviewText]
    );

    const reviewId = reviewResult.insertId;

    const fileInsertPromises = req.files.map(file => {
        const fileUrl = `${baseUrl}/uploads/${file.filename}`;
        return db.query(
          'INSERT INTO review_files (review_id, file_url) VALUES (?, ?)',
          [reviewId, fileUrl]
        );
      });
    
    await Promise.all(fileInsertPromises);

    res.status(201).json({ message: 'Review submitted successfully', reviewId });
  } catch (err) {
    res.status(500).json({ error: 'Database error', details: err });
  }
};

// GET /api/reviews - Fetch reviews with file URLs
exports.getReviews = async (req, res) => {
    try {
      // Fetch reviews with file URLs
      const [reviews] = await db.query(`
        SELECT r.id, r.rating, r.name, r.reviewTitle, r.reviewText, r.createdAt,
               GROUP_CONCAT(f.file_url) AS fileUrls
        FROM reviews r
        LEFT JOIN review_files f ON r.id = f.review_id
        GROUP BY r.id
        ORDER BY r.createdAt DESC
      `);
  
      // Convert fileUrls from comma-separated string to an array
      const result = reviews.map(review => ({
        ...review,
        fileUrls: review.fileUrls ? review.fileUrls.split(',') : []
      }));
  
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Database error', details: err });
    }
  };

// GET /api/reviews/stats - Fetch review statistics
exports.getReviewStats = async (req, res) => {
    try {
      // Step 1: Get total reviews and count of each rating
      const [reviewData] = await db.query(`
        SELECT 
          COUNT(*) AS totalReviews,
          AVG(rating) AS averageRating,
          SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) AS fiveStarCount,
          SUM(CASE WHEN rating = 4 THEN 1 ELSE 0 END) AS fourStarCount,
          SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END) AS threeStarCount,
          SUM(CASE WHEN rating = 2 THEN 1 ELSE 0 END) AS twoStarCount,
          SUM(CASE WHEN rating = 1 THEN 1 ELSE 0 END) AS oneStarCount
        FROM reviews
      `);
  
      // Step 2: Format the response
      const response = {
        averageRating: parseFloat(reviewData[0].averageRating).toFixed(1),
        totalReviews: reviewData[0].totalReviews,
        ratingCounts: {
          5: reviewData[0].fiveStarCount,
          4: reviewData[0].fourStarCount,
          3: reviewData[0].threeStarCount,
          2: reviewData[0].twoStarCount,
          1: reviewData[0].oneStarCount,
        },
        ratingPercentages: {
            5: ((reviewData[0].fiveStarCount / reviewData[0].totalReviews) * 100).toFixed(1),
            4: ((reviewData[0].fourStarCount / reviewData[0].totalReviews) * 100).toFixed(1),
            3: ((reviewData[0].threeStarCount / reviewData[0].totalReviews) * 100).toFixed(1),
            2: ((reviewData[0].twoStarCount / reviewData[0].totalReviews) * 100).toFixed(1),
            1: ((reviewData[0].oneStarCount / reviewData[0].totalReviews) * 100).toFixed(1)
          }
      };
  
      res.status(200).json(response);
    } catch (err) {
      res.status(500).json({ error: 'Database error', details: err });
    }
  };
  
