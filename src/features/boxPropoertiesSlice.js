import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    inputNumber: 1,
    name: "Border radius",
    value: 25,
    type: "range",
    minMax: [0, 250],
  },
  {
    inputNumber: 2,
    name: "Height",
    value: 100,
    type: "range",
    minMax: [0, 500],
  },
  {
    inputNumber: 3,
    name: "Width",
    value: 100,
    type: "range",
    minMax: [0, 500],
  },

  {
    inputNumber: 4,
    name: "Background Color",
    value: "#ffffff",
    type: "color",
  },
];

const boxPropertiesSlice = createSlice({
  name: "boxPropertiesSlice",
  initialState,
  reducers: {
    updateBoxProperties: (state, action) => {
      console.log("change !");
      state.find((x) => x.inputNumber === action.payload.inputNumber).value =
        action.payload.value;
    },
  },
});

export const { updateBoxProperties } = boxPropertiesSlice.actions;
export default boxPropertiesSlice.reducer;
