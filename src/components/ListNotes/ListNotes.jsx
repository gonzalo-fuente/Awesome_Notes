import Note from "../Note/Note";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ListNotes = ({ notesList, deleteNote, handleEdit }) => {
  return (
    <>
      {notesList.length ? (
        <Grid container spacing={2}>
          {notesList.map((note) => (
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
  );
};

export default ListNotes;
