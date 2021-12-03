import { getTodos } from "../api";
import { SET_TODOS, TOGGLE_MENU } from "./types";
import { dispatch } from "./store";

export const setTodos = async () => {
  const data = await getTodos();

  console.log(data);

  dispatch({ type: SET_TODOS, payload: data });
};

export const toggleMenu = () => {
  dispatch({ type: TOGGLE_MENU });
};
