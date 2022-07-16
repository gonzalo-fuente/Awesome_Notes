import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createNote, editNote } from "../../store/actions/notesActions";

import ShowCategories from "../ShowCategories/ShowCategories";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const CreateEditNote = ({ open, handleClose, editedNote, setEditedNote }) => {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    isArchived: false,
    categories: [],
    color: "",
  });
  const [validationError, setValidationError] = useState(false);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("#fff740");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editedNote) {
      setNewNote({ ...editedNote });
      setCategories([...editedNote.categories]);
      setColor(editedNote.color);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newNote.title === "") {
      setValidationError(true);
    } else {
      if (editedNote) {
        dispatch(
          editNote({
            ...newNote,
            categories,
            color,
          })
        );
        handleCancel();
      } else {
        dispatch(
          createNote({
            ...newNote,
            color: color,
            isArchived: false,
            categories: categories,
          })
        );
        handleCancel();
      }
    }
  };
  const handleCancel = () => {
    setNewNote({
      title: "",
      content: "",
      isArchived: false,
    });
    setValidationError(false);
    setEditedNote(null);
    setCategories([]);
    setCategory("");
    handleClose();
    setColor("#fff740");
  };

  const handleCategories = () => {
    if (category) {
      setCategories((prevState) => [...prevState, category]);
      setCategory("");
    }
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

          <FormLabel id="note-color">Note Color</FormLabel>
          <RadioGroup
            row
            aria-labelledby="note-color"
            name="note-color"
            value={color}
            onChange={(event) => setColor(event.target.value)}
            sx={{
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <FormControlLabel
              value="#ff7eb9"
              control={
                <Radio
                  sx={{
                    color: "#ff7eb9",
                    "&.Mui-checked": {
                      color: "#ff7eb9",
                    },
                  }}
                />
              }
              label="Pink"
            />
            <FormControlLabel
              value="#ff65a3"
              control={
                <Radio
                  sx={{
                    color: "#ff65a3",
                    "&.Mui-checked": {
                      color: "#ff65a3",
                    },
                  }}
                />
              }
              label="Magenta"
            />
            <FormControlLabel
              value="#7afcff"
              control={
                <Radio
                  sx={{
                    color: "#7afcff",
                    "&.Mui-checked": {
                      color: "#7afcff",
                    },
                  }}
                />
              }
              label="Cyan"
            />
            <FormControlLabel
              value="#feff9c"
              control={
                <Radio
                  sx={{
                    color: "#feff9c",
                    "&.Mui-checked": {
                      color: "#feff9c",
                    },
                  }}
                />
              }
              label="Lemon"
            />
            <FormControlLabel
              value="#fff740"
              control={
                <Radio
                  sx={{
                    color: "#fff740",
                    "&.Mui-checked": {
                      color: "#fff740",
                    },
                  }}
                />
              }
              label="Yellow"
            />
          </RadioGroup>

          {categories.length ? (
            <ShowCategories
              categories={categories}
              setCategories={setCategories}
            />
          ) : null}

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <TextField
              id="category"
              label="New Category"
              name="category"
              sx={{ flexGrow: 1, mr: 2 }}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button variant="contained" onClick={handleCategories}>
              Add
            </Button>
          </Box>
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
