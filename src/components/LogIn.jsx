import { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
//import { accessTokenActions } from "../store/AccessTokenSlice";
import { Link, useNavigate } from "react-router-dom";
import { userProfileActions } from "../store/UserProfileSlice";

const LogIn = () => {
  const username = useRef();
  const password = useRef();

  // const navigate = useNavigate();

  const dispatch = useDispatch();

  // const [flag, setFlag] = useState(false);

  let _username;
  let _password;

  const handleOnSubmit = (event) => {
    event.preventDefault();

    _username = username.current.value;
    _password = password.current.value;

    axios
      .post(
        "https://dummyjson.com/user/login",
        {
          username: _username,
          password: _password,
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
        console.log("LogIn", response.data);
        // console.log("LogIn", response.data.accessToken);
        // dispatch(accessTokenActions.addAccessToken(response.data.accessToken));
        dispatch(userProfileActions.addUser(response.data));
        navigate("/user_profile");
      })
      .catch(function (error) {
        console.log(error);
      });

    username.current.value = "";
    password.current.value = "";
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">Log In</h1>
      <form
        onSubmit={handleOnSubmit}
        className="bg-blue-200 shadow-2xl inline-block w-[30%]  rounded-[15px] my-4 p-8 "
      >
        <div className="flex flex-col justify-center content-center">
          <div className="mb-4 ">
            <label htmlFor="username" className="w-[400px] inline-block">
              Username:
            </label>
            <input
              required
              type="text"
              name="username"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-blue-400"
              placeholder="Enter Username"
              ref={username}
            ></input>
          </div>


          <div className="mb-4">
            <label htmlFor="password" className="w-[400px] inline-block">
              Password:
            </label>
            <input
              required
              type="password"
              name="password"
              className=" border-1 border-blue-400  rounded-[10px] py-2 ps-3 my-1 w-[350px]"
              placeholder="Enter Password"
              ref={password}
            ></input>
          </div>
          <div className="m-auto">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white  rounded-[10px] p-3 w-[200px]"
            >
              Submit
            </button>
            <div className="flex justify-center pt-[5px] ">
              <Link to="/enter_phoneno">
                <span className="text-red-500 text-[14px] font-bold">
                  Hey, Forgot Password?
                </span>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
