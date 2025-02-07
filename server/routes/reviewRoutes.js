const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../middlewares/aurhMiddleware');
const upload = require('../middlewares/uploadMiddleware');

// POST endpoint with file upload middleware
router.post('/reviews', authenticateToken, upload.array('files', 10), reviewController.createReview);
router.get('/reviews', authenticateToken, reviewController.getReviews);
// Route for fetching review statistics
router.get('/reviews/stats', authenticateToken, reviewController.getReviewStats);

module.exports = router;
