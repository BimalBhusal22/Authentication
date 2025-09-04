import { configureStore } from "@reduxjs/toolkit";
import UserProfileSlice from "./UserProfileSlice";

const authStore = configureStore({
  reducer: {
    userProfile: UserProfileSlice.reducer,
  },
});
export default authStore;
