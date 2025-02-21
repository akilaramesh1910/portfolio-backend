const express = require('express');
const contactController = require('../controllers/contactController');
const { validateContactSubmission } = require('../middleware/contactValidation');
const router = express.Router();

router.post('/submit', 
  validateContactSubmission,
  contactController.submitContact
);

module.exports = router;