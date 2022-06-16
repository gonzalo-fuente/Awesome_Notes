import { useDispatch, useSelector } from "react-redux";
import { deleteNotes } from "../../store/actions/notesActions";

import Note from "../Note/Note";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircleLoader from "../CircleLoader/CircleLoader";

import swal from "sweetalert";

const ListNotes = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const { loading, notes, error } = useSelector((state) => state.notesReducer);

  const deleteNote = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Note!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteNotes(notes, id));
      }
    });
  };

  return (
    <>
      {loading ? (
        <CircleLoader />
      ) : (
        <>
          {notes.length ? (
            <Grid container spacing={2}>
              {notes.map((note) => (
                <Grid item xs={12} md={6} key={note.id}>
                  <Note
                    note={note}
                    deleteNote={deleteNote}
                    handleEdit={handleEdit}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography
              variant="h5"
              color="error"
              sx={{ my: 2, fontStyle: "italic" }}
            >
              You don't have Notes!!!
              <br />
              Start Creating some new ones
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default ListNotes;
