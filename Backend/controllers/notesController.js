const { Note } = require("../models");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({
      order: [["id", "ASC"]],
    });
    if (notes.length === 0)
      return res.status(204).json({ "message": "No notes found." });
    res.json(notes);
  } catch (error) {
    console.error(error);
  }
};

const createNewNote = async (req, res) => {
  if (!req?.body?.title) {
    return res.status(400).json({ "message": "Title is required" });
  }

  const newNote = {
    title: req.body.title,
    content: req.body.content,
    isArchived: req.body.isArchived,
    categories: req.body.categories,
    color: req.body.color,
  };

  try {
    const result = await Note.create(newNote);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
};

const updateNote = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ "message": "ID parameter is required." });
  }

  const id = req.body.id;
  const newNote = {
    title: req.body.title,
    content: req.body.content,
    isArchived: req.body.isArchived,
    categories: req.body.categories,
    color: req.body.color,
  };

  try {
    const note = await Note.findOne({ where: { id } });
    if (!note) {
      return res.status(204).json({ "message": `No note matches ID ${id}.` });
    }

    const result = await Note.update(newNote, { where: { id } });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
};

const deleteNote = async (req, res) => {
  if (!req?.body?.id)
    return res.status(400).json({ "message": "Note ID required." });

  const id = req.body.id;

  try {
    const note = await Note.findOne({ where: { id } });
    if (!note) {
      return res.status(204).json({ "message": `No note matches ID ${id}.` });
    }

    const result = await Note.destroy({ where: { id } });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
  }
};

const getNote = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ "message": "Note ID required." });

  const id = req.params.id;

  try {
    const note = await Note.findOne({ where: { id } });
    if (!note) {
      return res.status(204).json({ "message": `No note matches ID ${id}.` });
    }
    res.json(note);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
  getNote,
};
