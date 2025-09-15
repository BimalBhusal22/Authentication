import axios from "axios";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();

  const newPassword = useRef();
  const confirmPassword = useRef();

  const dispatch = useDispatch();

  let _newPassword;
  let _confirmPassword;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    _newPassword = newPassword.current.value;
    _confirmPassword = confirmPassword.current.value;

    axios
      .post(
        "https://dummyjson.com/user/login",
        {
          newPassword: _newPassword,
          confirmPassword: _confirmPassword,
          expiresInMins: 30, // optional, defaults to 60
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true, // same as fetch's credentials: 'include'
        // }
      )
      .then(function (response) {
        console.log("PasswordReset", response.data);
        // console.log("LogIn", response.data.accessToken);
        // dispatch(accessTokenActions.addAccessToken(response.data.accessToken));
        dispatch(userProfileActions.addUser(response.data));
        navigate("/user_profile");
      })
      .catch(function (error) {
        console.log(error);
      });

    newPassword.current.value = "";
    confirmPassword.current.value = "";
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">Reset Your Password</h1>
      <form
        onSubmit={handleOnSubmit}
        className="bg-green-200 shadow-2xl inline-block w-[30%]  rounded-[15px] my-4 p-8 "
      >
        <div className="flex flex-col justify-center content-center">
          <div className="mb-4 ">
            <label htmlFor="username" className="w-[400px] inline-block">
              New Password:
            </label>
            <input
              required
              type="text"
              name="username"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter new Password"
              ref={newPassword}
            ></input>
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="w-[400px] inline-block">
              Confirm Password:
            </label>
            <input
              required
              type="password"
              name="username"
              className=" border-1 border-green-400  rounded-[10px] py-2 ps-3 my-1 w-[350px]"
              placeholder="Enter Password"
              ref={confirmPassword}
            ></input>
          </div>
          <div className="m-auto">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white  rounded-[10px] p-3 w-[200px]"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default PasswordReset;
