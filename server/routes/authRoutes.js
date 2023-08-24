// @ts-nocheck
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();
require('dotenv').config();

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '24h' });
    res.json({ error: null, token, message: 'Signup successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
      throw new Error('Authentication failed');
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { expiresIn: '24h' });
    res.json({ error: null, token, message: 'Signin successful' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;