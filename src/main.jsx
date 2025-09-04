import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Register from "./components/Register.jsx";
import LogIn from "./components/LogIn.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EnterPhoneNo from "./components/EnterPhoneNo.jsx";
import EnterOTP from "./components/EnterOTP.jsx";
import PasswordReset from "./components/PasswordReset.jsx";
import UserProfile from "./components/UserProfile.jsx";
import { Provider } from "react-redux";
import authStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Register />,
      },
      {
        path: "/log_in",
        element: <LogIn />,
      },
      {
        path: "/enter_phoneno",
        element: <EnterPhoneNo />,
      },
      {
        path: "/enter_otp",
        element: <EnterOTP />,
      },
      {
        path: "/password_reset",
        element: <PasswordReset />,
      },
      {
        path: "/user_profile",
        element: <UserProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={authStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
