import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNote, editNote } from "../../store/actions/notesActions";
import { v4 as uuid } from "uuid";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";

const CreateEditNote = ({ open, handleClose, editedNote, setEditedNote }) => {
  const [newNote, setNewNote] = useState({
    id: "",
    title: "",
    content: "",
    editedAt: "",
    color: "",
  });
  const [validationError, setValidationError] = useState(false);
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notesReducer);

  useEffect(() => {
    if (editedNote) {
      setNewNote({ ...editedNote });
    }
  }, [editedNote]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((prevNewNote) => {
      return {
        ...prevNewNote,
        [name]: value,
      };
    });
  };

  const colors = ["#ff7eb9", "#ff65a3", "#7afcff", "#feff9c", "#fff740"];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newNote.title === "") {
      setValidationError(true);
    } else {
      if (editedNote) {
        dispatch(editNote(notes, { ...newNote, editedAt: Date.now() }));
        handleCancel();
      } else {
        const color = colors[Math.floor(Math.random() * 5)];
        dispatch(
          createNote(notes, {
            ...newNote,
            id: uuid(),
            editedAt: Date.now(),
            color: color,
          })
        );
        handleCancel();
      }
    }
  };
  const handleCancel = () => {
    setNewNote({
      id: "",
      title: "",
      content: "",
      editedAt: "",
    });
    setValidationError(false);
    setEditedNote(null);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          handleCancel();
        }
      }}
    >
      <DialogTitle>Create / Edit Note</DialogTitle>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <DialogContent>
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Title"
            name="title"
            required
            value={newNote.title}
            onChange={handleChange}
            error={validationError}
            helperText={validationError && "* The Title is required"}
          />
          <TextField
            margin="normal"
            fullWidth
            id="content"
            label="Content"
            name="content"
            multiline
            rows={5}
            value={newNote.content}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>
            {editedNote ? "Edit" : "Create"}
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default CreateEditNote;
