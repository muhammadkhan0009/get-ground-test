import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaginationModelState {
  page: number;
  pageSize: number;
}

// Define the initial state using that type
const initialState: PaginationModelState = {
  page: 0,
  pageSize: 20,
};
export const updateModel = (
  state: PaginationModelState,
  action: PayloadAction<PaginationModelState>
) => {
  return { ...state, ...action.payload };
};

const updatePaginationModel = createSlice({
  name: "updatePaginationModel",
  initialState,
  reducers: {
    update: updateModel,
  },
});

export const { update } = updatePaginationModel.actions;
export default updatePaginationModel.reducer;
