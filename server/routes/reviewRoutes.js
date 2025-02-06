const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const authenticateToken = require('../middlewares/aurhMiddleware');
const upload = require('../middlewares/uploadMiddleware');

// POST endpoint with file upload middleware
router.post('/reviews', authenticateToken, upload.single('file'), reviewController.createReview);
router.get('/reviews', authenticateToken, reviewController.getReviews);

module.exports = router;
