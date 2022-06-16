import { useEffect, useState } from "react";
import { getNotes } from "../../store/actions/notesActions";
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

  const dispatch = useDispatch();
  const { loading, notes, error } = useSelector((state) => state.notesReducer);

  useEffect(() => {
    dispatch(getNotes());
  }, []);

  const handleEdit = (id) => {
    setEditedNote(notes.filter((note) => note.id === id)[0]);
    setOpen(true);
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
            My Notes
          </Typography>
          <Box>
            <Button variant="contained" onClick={handleOpen}>
              Create Note
            </Button>
          </Box>
        </Box>
        <ListNotes notesList={notes} handleEdit={handleEdit} />
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
