import { useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import InputIcon from "@mui/icons-material/Input";
import OutputIcon from "@mui/icons-material/Output";

import NoteDetails from "../NoteDetails/NoteDetails";

const Note = ({ note, deleteANote, handleEdit }) => {
  const dateTime = new Date(note.updatedAt).toLocaleString();
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
                {note.isArchived ? (
                  <OutputIcon
                    align="center"
                    color="primary"
                    sx={{ mr: 1, cursor: "pointer" }}
                    onClick={() => handleEdit(note.id, "archived")}
                  />
                ) : (
                  <InputIcon
                    align="center"
                    color="primary"
                    sx={{ mr: 1, cursor: "pointer" }}
                    onClick={() => handleEdit(note.id, "archived")}
                  />
                )}
                <EditOutlinedIcon
                  align="center"
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleEdit(note.id, "note")}
                />
                <DeleteOutlinedIcon
                  align="center"
                  color="error"
                  sx={{ cursor: "pointer" }}
                  onClick={() => deleteANote(note.id)}
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
