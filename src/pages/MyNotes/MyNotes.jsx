import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";

import swal from "sweetalert";

import CreateEditNote from "../../components/CreateEditNote/CreateEditNote";
import ListNotes from "../../components/ListNotes/ListNotes";

import { notes } from "../../db";

const MyNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [editedNote, setEditedNote] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setNotesList(notes);
  }, []);

  const addNote = (newNote) => {
    setNotesList((prevNotesList) => [...prevNotesList, newNote]);
  };

  const handleEdit = (id) => {
    setEditedNote(notesList.filter((note) => note.id === id)[0]);
    setOpen(true);
  };

  const editNote = (editedNote) => {
    const newNotesList = notesList.filter((note) => note.id !== editedNote.id);
    setNotesList([...newNotesList, editedNote]);
  };

  const deleteNote = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const newNotesList = notesList.filter((note) => note.id !== id);
        setNotesList(newNotesList);
      }
    });
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
        <ListNotes
          notesList={notesList}
          deleteNote={deleteNote}
          handleEdit={handleEdit}
        />
        <CreateEditNote
          open={open}
          handleClose={handleClose}
          addNote={addNote}
          editedNote={editedNote}
          setEditedNote={setEditedNote}
          editNote={editNote}
        />
      </Container>
    </>
  );
};

export default MyNotes;
