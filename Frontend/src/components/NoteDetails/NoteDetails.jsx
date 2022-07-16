import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Box from "@mui/system/Box";

const NoteDetails = ({ note, open, handleClose }) => {
  const dateTime = new Date(note.updatedAt).toLocaleString();
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box sx={{ backgroundColor: `${note.color}` }}>
        <PushPinOutlinedIcon sx={{ fontSize: 30, mt: 1, ml: 1 }} />

        <DialogTitle>{note.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {note.content}
          </DialogContentText>
          <Typography
            align="right"
            color="text.secondary"
            sx={{ fontSize: 10, mt: 2 }}
            component="p"
          >
            Last edited: {dateTime}
          </Typography>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default NoteDetails;
