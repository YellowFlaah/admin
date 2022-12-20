import { createSlice } from "@reduxjs/toolkit";
import data from "../../Data/dummy_data.json";

const initialLog = data.map((el) => {
  el.Edit = "N";
  return el;
});

export const logSlice = createSlice({
  name: "logSlice",
  initialState: { value: initialLog },
  reducers: {
    addLog: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    setEdit: (state, action) => {
      state.value = [...state.value].map((el) => {
        action.payload === el.ID ? (el.Edit = "Y") : (el.Edit = "N");
        return el;
      });
    },
    clearEdit: (state, action) => {
      state.value = [...state.value].map((el) => {
        el.Edit = "N";
        return el;
      });
    },
    editLog: (state, action) => {
      state.value = [...state.value].map((el) => {
        if (el.Edit === "Y") {
          el.Name = action.payload.Name;
          el.Task = action.payload.Task;
          el.timeStart = action.payload.timeStart;
          el.timeEnd = action.payload.timeEnd;
          el.Manager = action.payload.Manager;
        }
        return el;
      });
    },
    deleteLog: (state, action) => {
      console.log(action.payload);
      state.value = state.value.filter((item) => item.ID !== action.payload);
    },
  },
});

export const { /*changeLog,*/ addLog, setEdit, clearEdit, editLog, deleteLog } =
  logSlice.actions;
export default logSlice.reducer;
