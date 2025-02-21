const validator = require('validator');

const validateContactSubmission = (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || name.trim().length < 2) {
      return res.status(400).json({ 
        error: "Name must be at least 2 characters long" 
      });
    }

    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ 
        error: "Invalid email format" 
      });
    }

    if (phone && !validator.isMobilePhone(phone, 'any')) {
      return res.status(400).json({ 
        error: "Invalid phone number format" 
      });
    }

    if (!message || message.trim().length < 2) {
      return res.status(400).json({ 
        error: "Message must be at least 10 characters long" 
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ 
      error: "Validation middleware error", 
      details: error.message 
    });
  }
};

module.exports = {
  validateContactSubmission
};