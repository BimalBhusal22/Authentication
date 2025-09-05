import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const username = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();

   const _username = username.current.value;
   const _password = password.current.value;

    // axios
    //   .post(
    //     "https://dummyjson.com/user/register",
    //     {
    //       username: _username,
    //       password: _password,
    //     },
    //     // {
    //     //   headers: {
    //     //     "Content-Type": "application/json",
    //     //   },
    //     //   withCredentials: true, // same as fetch's credentials: 'include'
    //     // }
    //   )
    //   .then(function (response) {
    //     // console.log("LogIn", response.data);
    //     navigate("/log_in");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    username.current.value = "";
    password.current.value = "";

    navigate("/log_in");
  };


  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">User Registration</h1>
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
            <label htmlFor="username" className="w-[400px] inline-block">
              Password:
            </label>
            <input
              required
              type="password"
              name="username"
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
          </div>
        </div>
      </form>
    </div>
  );
};
export default Register;
