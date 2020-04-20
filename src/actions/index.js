import { GET_USER } from "./types.js";

const getUser = data => ({
  type: GET_USER,
  data
});

const setUser = data => dispatch => dispatch(getUser(data));

export const actions = {
  setUser
};
