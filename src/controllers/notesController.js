const NotesModel = require('../models/notesModel');

const NotesController = {
  getAllNotes: (req, res) => {
    NotesModel.getAllNotes((err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
  },

  getNoteById: (req, res) => {
    const { id } = req.params;
    NotesModel.getNoteById(id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: 'Data tidak ditemukan' })
      res.json(results[0]);
    });
  },

  createNote: (req, res) => {
    const { title, datetime, note } = req.body;
    if (!title || !datetime || !note) return res.status(400).json({ message: 'Semua field harus diisi' })
    NotesModel.createNote(req.body, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, ...req.body });
    });
  },

  updateNote: (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    if (!title || !datetime || !note) return res.status(400).json({ message: 'Semua field harus diisi' })
    NotesModel.updateNote(id, req.body, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
      res.json({ id, ...req.body });
    });
  },

  deleteNote: (req, res) => {
    const { id } = req.params;
    NotesModel.deleteNote(id, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: 'Data tidak ditemukan' });
      res.json({ message: 'Data berhasil dihapus' });
    });
  },
};

module.exports = NotesController;
