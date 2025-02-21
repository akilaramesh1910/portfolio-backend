const ContactSubmission = require('../models/ContactSubmission');

const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const submission = new ContactSubmission({
      name,
      email,
      phone,
      message,
      submittedAt: new Date()
    });

    await submission.save();

    res.status(201).json({ 
      message: 'Contact submission successful', 
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Submission failed', 
      details: error.message 
    });
  }
};

module.exports = {
  submitContact
};