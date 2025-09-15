import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const EnterOTP = () => {
  const navigate = useNavigate();

  const otp = useRef();

  let _otp;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    _otp = otp.current.value;

    axios
      .post(
        "https://dummyjson.com/user/login",
        {
          otp: _otp,
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
        console.log("EnterOTP", response.data);
        // console.log("LogIn", response.data.accessToken);
        // dispatch(accessTokenActions.addAccessToken(response.data.accessToken));
        // dispatch(userProfileActions.addUser(response.data));
        navigate("/password_reset");
      })
      .catch(function (error) {
        console.log(error);
      });

    otp.current.value = "";
  };
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">OTP Verification</h1>
      <form
        onSubmit={handleOnSubmit}
        className="bg-green-200 shadow-2xl inline-block w-[30%]  rounded-[15px] my-4 p-8 "
      >
        <div className="flex flex-col justify-center content-center">
          <div className="mb-4 ">
            <label htmlFor="username" className="w-[400px] inline-block">
              Enter OTP:
            </label>
            <input
              required
              ref={otp}
              type="text"
              name="username"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter phone no"
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

export default EnterOTP;
