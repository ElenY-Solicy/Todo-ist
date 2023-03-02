import { User, UserData } from "types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: User = {
  data: [],
};

const mainSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
    deleteTodo(state, action: PayloadAction<string>) {
      state.data = state.data.filter((el) => el.id !== action.payload);
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    editTodo(state, action: PayloadAction<UserData>) {
      state.data = state.data.map((el) => {
        console.log(action.payload.name,"****");
        if (el.id === action.payload.id) {
      
          (el.name = action.payload.name),
            (el.todo = action.payload.todo),
            (el.date = action.payload.date),
            (el.description = action.payload.description);
        }
        return el;
      });
      localStorage.setItem("data", JSON.stringify(state.data));
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = mainSlice.actions;
export default mainSlice.reducer;
