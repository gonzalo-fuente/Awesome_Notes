import { useEffect, useState } from "react";
import { editNote, getNotes } from "../../store/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";

import CreateEditNote from "../../components/CreateEditNote/CreateEditNote";
import ListNotes from "../../components/ListNotes/ListNotes";

const MyNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [editedNote, setEditedNote] = useState(null);
  const [open, setOpen] = useState(false);
  const [isArchived, setIsArchived] = useState(false);

  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notesReducer);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  useEffect(() => {
    setNotesList(notes.filter((note) => note.archived === isArchived));
  }, [notes, isArchived]);

  const handleEdit = (id, type) => {
    if (type === "note") {
      setEditedNote(notes.filter((note) => note.id === id)[0]);
      setOpen(true);
    } else if (type === "archived") {
      const archivedNote = notes.filter((note) => note.id === id)[0];
      archivedNote.archived = !archivedNote.archived;
      dispatch(editNote(notes, archivedNote));
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2em" }}>
          <Typography variant="h4" my={2}>
            {isArchived ? "Archived" : "My Notes"}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "2em" }}>
            <Button variant="contained" onClick={handleOpen}>
              Create Note
            </Button>
            <Button
              variant="text"
              onClick={() => setIsArchived((prevState) => !prevState)}
            >
              {isArchived ? "My Notes" : "Archived"}
            </Button>
          </Box>
        </Box>
        <ListNotes notesList={notesList} handleEdit={handleEdit} />
        <CreateEditNote
          open={open}
          handleClose={handleClose}
          editedNote={editedNote}
          setEditedNote={setEditedNote}
        />
      </Container>
    </>
  );
};

export default MyNotes;
