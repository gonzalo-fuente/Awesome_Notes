import { NOTES_REQUEST, NOTES_SUCCESS, NOTES_FAILURE } from "../types";

const initialState = {
  loading: false,
  notes: [],
  error: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case NOTES_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
        error: null,
      };

    case NOTES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
