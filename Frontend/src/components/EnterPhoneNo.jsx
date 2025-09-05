import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EnterPhoneNo = () => {
  const phoneno = useRef();
  const navigate = useNavigate();
  let _phoneno;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("EnterPhoneNo");

    _phoneno = phoneno.current.value;

    axios
      .post(
        "https://dummyjson.com/user/login",
        {
          phoneno: _phoneno,
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
        console.log("EnterPhoneNo", response.data);
        // console.log("LogIn", response.data.accessToken);
        // dispatch(accessTokenActions.addAccessToken(response.data.accessToken));
        // dispatch(userProfileActions.addUser(response.data));
        navigate("/enter_otp");
      })
      .catch(function (error) {
        console.log(error);
      });

    phoneno.current.value = "";
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">Your Phone Number</h1>
      <form
        onSubmit={handleOnSubmit}
        className="bg-blue-200 shadow-2xl inline-block w-[30%]  rounded-[15px] my-4 p-8 "
      >
        <div className="flex flex-col justify-center content-center">
          <div className="mb-4 ">
            <label htmlFor="username" className="w-[400px] inline-block">
              Phone number to send OTP:
            </label>
            <input
              required
              ref={phoneno}
              type="text"
              name="username"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-blue-400"
              placeholder="Enter phone no"
            ></input>
          </div>

          <div className="m-auto">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white  rounded-[10px] p-3 w-[200px]"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EnterPhoneNo;
