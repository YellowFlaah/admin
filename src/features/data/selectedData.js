import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const selectedData = createSlice({
  name: "selectedData",
  initialState,
  reducers: {
    addData: (state, action) => {
      if (action.payload != null) {
        state.data.push(action.payload);
      }
    },
    deleteSelectedData: (state, action) => {
      if (action.payload != null) {
        state.data.filter((item) => item.id !== action.payload);
      }
    },
    deleteAll: (state) => {
      state.data = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData, deleteAll, deleteSelectedData } = selectedData.actions;

export default selectedData.reducer;
