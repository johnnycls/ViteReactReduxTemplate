import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: -1,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
