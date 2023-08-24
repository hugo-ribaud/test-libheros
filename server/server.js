// @ts-nocheck
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const noteRoutes = require('./routes/noteRoutes');
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://hugo:iETOkNEGBUnVw4zi@cluster0.hvf9n0s.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(authRoutes);
app.use(noteRoutes);

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  console.error("Request body:", req.body);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
