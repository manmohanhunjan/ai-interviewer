const User = require('../models/User');
const Url = require('../models/Url');
const { generateSalt, hashEmail } = require('../utils/hash');
const shortid = require('shortid');

exports.generateUrl = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
    }

    const emailSalt = generateSalt();
    const hashedEmail = hashEmail(email, emailSalt);
    const shortUrl = `http://localhost:3000/${shortid.generate()}`;

    const newUrl = new Url({
      userId: user._id,
      emailSalt,
      hashedEmail,
      shortUrl,
    });

    await newUrl.save();
    res.status(201).json({ shortUrl, emailSalt, hashedEmail });
  } catch (error) {
    console.error('Error generating URL:', error);
    res.status(500).json({ error: 'Server error' });
  }
};