import { configureStore } from "@reduxjs/toolkit";
import langReducer from "./reducers/langSlice";
import themeReducer from "./reducers/themeSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    langReducer,
    themeReducer,
  }
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;