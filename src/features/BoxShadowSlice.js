import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
  {
    id: nanoid(5),
    active: true,
    activeView: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal Offset",
        value: 0,
        type: "range",
        minMax: [-20, 20],
      },
      {
        inputNumber: 2,
        name: "Vertical Offset",
        value: 10,
        type: "range",
        minMax: [-20, 20],
      },
      {
        inputNumber: 3,
        name: "Blur Radius",
        value: 15,
        type: "range",
        minMax: [-20, 20],
      },
      {
        inputNumber: 4,
        name: "Spread Offset",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const boxShadowSlice = createSlice({
  name: "boxShadowsSlice",
  initialState,
  reducers: {
    changeShadow: (state, action) => {
      state.map((shadow) => (shadow.activeView = false));
      state.find((shadow) => shadow.id === action.payload).activeView = true;
    },
    removeShadow: (state, action) => {
      console.log("removeShadow", action.payload);
      const indexShadowToDelete = state.findIndex(
        (shadow) => shadow.id === action.payload
      );

      state.splice(indexShadowToDelete, 1);
      state[0].activeView = true;
      console.log("indexShadowToDelete", indexShadowToDelete);
    },
    addShadow: (state, action) => {
      const newShadow = { ...state[0], id: nanoid(5), activeView: false };
      state.push(newShadow);
    },
    updateShadow: (state, action) => {
      const shadowToUpdate = state.find(
        (shadow) => shadow.id === action.payload.id
      );
      shadowToUpdate.inputs.find(
        (input) => input.inputNumber === action.payload.inputNumber
      ).value = action.payload.value;
    },
    updateCheckbox: (state, action) => {
      console.log("checkChange", action.payload);
      const shadowToUpdate = state.find(
        (shadow) => shadow.id === action.payload.id
      );
      shadowToUpdate[action.payload.name] =
        !shadowToUpdate[action.payload.name];
    },
  },
});

export const {
  changeShadow,
  removeShadow,
  addShadow,
  updateShadow,
  updateCheckbox,
} = boxShadowSlice.actions;
export default boxShadowSlice.reducer;
