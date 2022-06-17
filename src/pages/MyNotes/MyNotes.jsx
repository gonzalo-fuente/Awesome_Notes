import { useEffect, useState } from "react";
import { editNote, getNotes } from "../../store/actions/notesActions";
import { useDispatch, useSelector } from "react-redux";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Box from "@mui/material/Box";

import CreateEditNote from "../../components/CreateEditNote/CreateEditNote";
import ListNotes from "../../components/ListNotes/ListNotes";
import Navbar from "../../components/Navbar/Navbar";
import SelectCategory from "../../components/SelectCategory/SelectCategory";

const MyNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [editedNote, setEditedNote] = useState(null);
  const [open, setOpen] = useState(false);
  const [isArchived, setIsArchived] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notesReducer);

  // Get Notes
  useEffect(() => {
    dispatch(getNotes());
  }, []);

  // Filter Notes
  useEffect(() => {
    const filterArchived = notes.filter((note) => note.archived === isArchived);
    if (filterCategory === "") {
      setNotesList(filterArchived);
    } else {
      const filterByCategory = filterArchived.filter(
        (note) => note.categories.indexOf(filterCategory) != -1
      );
      setNotesList(filterByCategory);
    }
  }, [notes, isArchived, filterCategory]);

  //Get all categories from notes
  useEffect(() => {
    const filterArchived = notes.filter((note) => note.archived === isArchived);
    const categoriesArray = [];
    filterArchived.forEach((note) => {
      note.categories.forEach((category) => {
        if (categoriesArray.indexOf(category) === -1) {
          categoriesArray.push(category);
        }
      });
    });
    setCategories(categoriesArray);
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

  const handleArchived = () => {
    setFilterCategory("");
    setIsArchived((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2em", mt: 2 }}>
          <Typography variant="h4" my={2}>
            {isArchived ? "Archived" : "My Notes"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              gap: {
                xs: "1em",
                sm: "2em",
              },
            }}
          >
            <Button variant="contained" onClick={handleOpen}>
              Create Note
            </Button>
            <Button variant="text" onClick={handleArchived}>
              {isArchived ? "My Notes" : "Archived"}
            </Button>
          </Box>
        </Box>
        <SelectCategory
          categories={categories}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
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
