import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { userProfileActions } from "../store/UserProfileSlice";

const Register = () => {
  const userName = useRef();
  const password = useRef();
  const email = useRef();
  const contactNumber = useRef();
  const address = useRef();
  const gender = useRef();
  const dateOfBirth = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();


  const handleOnSubmit = (event) => {
    event.preventDefault();

    const _userName = userName.current.value;
    const _password = password.current.value;
    const _email = email.current.value;
    const _contactNumber = contactNumber.current.value;
    const _address = address.current.value;
    const _gender = gender.current.value;
    const _dateOfBirth = dateOfBirth.current.value;

    axios
      .post(
        "http://localhost:3000/user/register",
        {
          userName: _userName,
          password: _password,
          email: _email,
          contactNumber: _contactNumber,
          address: _address,
          gender: _gender,
          dateOfBirth: _dateOfBirth,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   withCredentials: true, // same as fetch's credentials: 'include'
        // }
      )
      .then(function (response) {
        console.log("Register", response.data);
        dispatch(userProfileActions.addUser(response.data));
        navigate("/log_in");
      })
      .catch(function (error) {
        console.log(error);
      });

    userName.current.value = "";
    password.current.value = "";
    email.current.value = " ";
    contactNumber.current.value = " ";
    address.current.value = "";
    gender.current.value = "";
    dateOfBirth.current.value = "";

    // navigate("/log_in");
  };

  return (
    <div className="flex flex-col justify-center items-center my-10">
      <h1 className="text-[25px]">User Registration</h1>
      <form
        onSubmit={handleOnSubmit}
        className="bg-green-200 shadow-2xl inline-block w-[30%]  rounded-[15px] my-4 p-8 "
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
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter Username"
              ref={userName}
            ></input>
          </div>

          <div className="mb-4 ">
            <label htmlFor="email" className="w-[400px] inline-block">
              Email:
            </label>
            <input
              required
              type="text"
              name="email"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter email"
              ref={email}
            ></input>
          </div>

          <div className="mb-4 ">
            <label htmlFor="contactNumber" className="w-[400px] inline-block">
              Contact Number:
            </label>
            <input
              required
              type="text"
              name="contactNumber"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter contact number"
              ref={contactNumber}
            ></input>
          </div>

          <div className="mb-4 ">
            <label htmlFor="address" className="w-[400px] inline-block">
              Address:
            </label>
            <input
              required
              type="text"
              name="address"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter address"
              ref={address}
            ></input>
          </div>

          <div className="mb-4 ">
            <label htmlFor="gender" className="w-[400px] inline-block">
              Gender:
            </label>
            <input
              required
              type="text"
              name="gender"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter gender"
              ref={gender}
            ></input>
          </div>

          <div className="mb-4 ">
            <label htmlFor="dateOfBirth" className="w-[400px] inline-block">
              Date of Birth:
            </label>
            <input
              required
              type="text"
              name="dateOfBirth"
              className=" border-1 rounded-[10px] py-2 ps-3 my-1 w-[350px] border-green-400"
              placeholder="Enter date of birth"
              ref={dateOfBirth}
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
              className=" border-1 border-green-400  rounded-[10px] py-2 ps-3 my-1 w-[350px]"
              placeholder="Enter Password"
              ref={password}
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
export default Register;
