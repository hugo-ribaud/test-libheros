// @ts-nocheck
const express = require('express');
const Note = require('../models/Note');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/notes', authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user._id });
    res.json(notes);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/notes/:id', authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });
    if (!note) {
      return res.status(404).send({ error: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


router.post('/notes', authMiddleware, async (req, res) => {
  try {
    const note = new Note({
      ...req.body,
      userId: req.user._id
    });
    await note.save();
    res.status(201).send({
      message: 'Note created successfully!',
      note
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.patch('/notes/:id', authMiddleware, async (req, res) => {
  const updates = Object.keys(req.body);
  try {
    const note = await Note.findOne({ _id: req.params.id, userId: req.user._id });

    if (!note) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      note[update] = req.body[update];
    });
    note.lastUpdatedAt = Date.now();
    await note.save();
    res.send(note);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.delete('/notes/:id', authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

    if (!note) {
      return res.status(404).send({ error: 'Note not found' });
    }

    res.send({ message: 'Note deleted successfully', note });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});


module.exports = router;
