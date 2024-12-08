const db = require('../config/db');

const NotesModel = {
  getAllNotes: (callback) => {
    db.query('SELECT * FROM notes', callback);
  },

  getNoteById: (id, callback) => {
    db.query('SELECT * FROM notes WHERE id = ?', [id], callback);
  },

  createNote: (data, callback) => {
    const { title, datetime, note } = data;
    db.query('INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)', [title, datetime, note], callback);
  },

  updateNote: (id, data, callback) => {
    const { title, datetime, note } = data;
    db.query('UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?', [title, datetime, note, id], callback);
  },

  deleteNote: (id, callback) => {
    db.query('DELETE FROM notes WHERE id = ?', [id], callback);
  },
};

module.exports = NotesModel;
