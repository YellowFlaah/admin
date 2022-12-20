import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  data: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      if (action.payload != null) {
        state.data.push(action.payload);
      }
    },
    deleteData: (state, action) => {
      if (action.payload != null) {
        state.data = state.data.filter((item) => item.id !== action.payload);
      }
    },
    copyData: (state, action) => {
      if (action.payload != null) {
        let filteredData = state.data.filter(
          (item) => item.id === action.payload
        );
        const newData = {
          id: nanoid(),
          person: filteredData[0].person,
          tasks: filteredData[0].tasks,
          startDate: filteredData[0].startDate,
          endDate: filteredData[0].endDate,
          subTasks: filteredData[0].subTasks,
          duration: filteredData[0].duration,
          hours: filteredData[0].hours,
          mins: filteredData[0].mins,
        };
        state.data.push(newData);
      }
    },
    editData: (state, action) => {
      if (action.payload !== null) {
        state.data = state.data.filter((item) => item.id !== action.payload.id);
        state.data.push(action.payload.data);
      }
    },
    editAll: (state, action) => {
      if (action.payload !== null) {
        console.log(action.payload);

        action.payload.ids.map((id) => {
          state.data = state.data.filter((item) => item.id !== id.id);
          const data = {
            id: nanoid(),
            person: action.payload.data.person,
            tasks: action.payload.data.tasks,
            startDate: action.payload.data.startDate,
            endDate: action.payload.data.endDate,
            subTasks: action.payload.data.subTasks,
            duration: action.payload.data.duration,
            mins: action.payload.data.mins,
            hours: action.payload.data.hours,
          };
          state.data.push(data);
        });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, deleteData, copyData, editData, editAll } =
  dataSlice.actions;

export default dataSlice.reducer;
