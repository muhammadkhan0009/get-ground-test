import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";
// import updatePaginationModel from "./reducers/updatePaginationModel";

export const store = configureStore({
  reducer: {
    // Add the generated RTK Query "API slice" caching reducer
    [api.reducerPath]: api.reducer,
    // Removing now, not used anymore
    // updatePagination: updatePaginationModel,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
