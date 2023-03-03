import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User, UserData } from "types";

const initialState: User = {
  data: [],
};

const mainSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addState(state, action: PayloadAction<UserData[]>) {
      state.data = action.payload;
    },
    addTodo(state, action: PayloadAction<UserData>) {
      state.data.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.data = state.data.filter((el) => el.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    editTodo(state, action: PayloadAction<UserData>) {
      state.data = state.data.map((el) => {
        if (el.id === action.payload.id) {
          (el.name = action.payload.name || el.name),
            (el.todo = action.payload.todo || el.todo),
            (el.date = action.payload.date || el.date),
            (el.description = action.payload.description || el.description);
        }
        return el;
      });
      localStorage.setItem("data", JSON.stringify(state.data));
    },
  },
});

export const { addTodo, deleteTodo, editTodo, addState } = mainSlice.actions;
export default mainSlice.reducer;
