import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE } from "../types";
import { axiosInstance } from "../../utils/axios";

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

export const getNotes = () => async (dispatch) => {
  dispatch(notesRequest());

  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
  }
  try {
    const response = await axiosInstance.get(`/notes`);

    if (response.status === 200) {
      dispatch(notesSuccess(response.data));
    } else if (response.status === 204) {
      dispatch(notesSuccess([]));
    }
  } catch (error) {
    dispatch(notesFailure(error));
  }
};

export const createNote = (note) => async (dispatch) => {
  dispatch(notesRequest());

  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
  }
  try {
    const response = await axiosInstance.post(`/notes`, JSON.stringify(note));
    if (response.status === 200) {
      console.log("Note Created");
    }
  } catch (error) {
    dispatch(notesFailure(error));
  } finally {
    dispatch(getNotes());
  }
};

export const editNote = (note) => async (dispatch) => {
  dispatch(notesRequest());

  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
  }
  try {
    const response = await axiosInstance.put("/notes", JSON.stringify(note));
    if (response.status === 200) {
      console.log("Note Edited");
    }
  } catch (error) {
    dispatch(notesFailure(error));
  } finally {
    dispatch(getNotes());
  }
};

export const deleteNote = (id) => async (dispatch) => {
  dispatch(notesRequest());

  const token = JSON.parse(sessionStorage.getItem("token"));
  if (token) {
    axiosInstance.defaults.headers["Authorization"] = "Bearer " + token;
  }
  try {
    const response = await axiosInstance.delete("/notes", {
      data: JSON.stringify({ id: id }),
    });
    if (response.status === 200) {
      console.log("Note Deleted");
    }
  } catch (error) {
    dispatch(notesFailure(error));
  } finally {
    dispatch(getNotes());
  }
};
