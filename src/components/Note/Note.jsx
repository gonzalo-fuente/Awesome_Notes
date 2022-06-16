import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import NoteDetails from "../NoteDetails/NoteDetails";

const Note = ({ note, deleteNote, handleEdit }) => {
  const dateTime = new Date(note.editedAt).toLocaleString();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Card variant="outlined" sx={{ backgroundColor: `${note.color}` }}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <NoteAltOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              >
                <Typography
                  variant="body1"
                  component="h5"
                  sx={{ fontWeight: "600" }}
                  color="text.secondary"
                >
                  {note.title}
                </Typography>
                <Typography
                  variant="body2"
                  component="time"
                  color="text.secondary"
                >
                  Last edited: {dateTime}
                </Typography>
              </Box>
              <Box
                sx={{
                  alignSelf: "flex-end",
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: 2,
                  flexGrow: 1,
                }}
              >
                <EditOutlinedIcon
                  align="center"
                  color="primary"
                  onClick={() => handleEdit(note.id)}
                />
                <DeleteOutlinedIcon
                  align="center"
                  color="error"
                  onClick={() => deleteNote(note.id)}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <NoteDetails note={note} open={open} handleClose={handleClose} />
    </>
  );
};

export default Note;
