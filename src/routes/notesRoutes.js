const express = require('express');
const NotesController = require('../controllers/notesController');

const router = express.Router();

router.get('/', NotesController.getAllNotes);
router.get('/:id', NotesController.getNoteById);
router.post('/', NotesController.createNote);
router.put('/:id', NotesController.updateNote);
router.delete('/:id', NotesController.deleteNote);

module.exports = router;
