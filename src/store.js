import { configureStore } from "@reduxjs/toolkit";
import boxShadowSlice from "./features/BoxShadowSlice";
import boxPropertiesSlice from "./features/boxPropoertiesSlice";

export const store = configureStore({
  reducer: { boxShadowSlice, boxPropertiesSlice },
});
