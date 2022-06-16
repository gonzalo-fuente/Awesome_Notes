import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE } from "../types";

export const notesRequest = () => ({
  type: NOTES_REQUEST,
});

export const notesSuccess = (data) => ({
  type: NOTES_SUCCESS,
  payload: data,
});

export const notesFailure = (error) => ({
  type: NOTES_FAILURE,
  payload: error,
});

export const getNotes = (path) => async (dispatch) => {
  dispatch(notesRequest());

  try {
    const response = await localStorage.getItem("notes");
    if (response) {
      const data = JSON.parse(response);
      dispatch(notesSuccess(data));
    }
  } catch (error) {
    dispatch(notesFailure(error));
  }
};

export const createNote = (notes, newNote) => (dispatch) => {
  dispatch(notesRequest());

  const newNotes = [...notes, newNote];
  localStorage.setItem("notes", JSON.stringify(newNotes));
  dispatch(getNotes());
};

export const editNote = (notes, editedNote) => async (dispatch) => {
  dispatch(notesRequest());

  const newNotesList = notes.filter((note) => note.id !== editedNote.id);
  const newNotes = [...newNotesList, editedNote];
  localStorage.setItem("notes", JSON.stringify(newNotes));
  dispatch(getNotes());
};

export const deleteNotes = (notes, id) => (dispatch) => {
  dispatch(notesRequest());
  console.log(notes, id);
  const newNotes = notes.filter((note) => note.id !== id);
  console.log(newNotes);
  localStorage.setItem("notes", JSON.stringify(newNotes));
  dispatch(getNotes(""));

  // dispatch(notesFailure(error));
};
