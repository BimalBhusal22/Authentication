import { createSlice } from "@reduxjs/toolkit";

const UserProfileSlice = createSlice({
  name: "userProfile",
  initialState: {},
  reducers: {
    addUser: (state, action) => {
      // console.log("UserProfileSlice", action.payload);
      
      // localStorage.setItem("user", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

export default UserProfileSlice;
export const userProfileActions = UserProfileSlice.actions;
