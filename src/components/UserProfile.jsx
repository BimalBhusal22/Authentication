// import { useSelector } from "react-redux";

const UserProfile = () => {
  const userFromStore = useSelector((store) => store.userProfile);
  // console.log("userFromStore in UserProfile", userFromStore);
  const user = userFromStore; //|| JSON.parse(localStorage.getItem("user"))
  // console.log("UserProfile", user);
  return (
    <>
      <h1 className="mt-16 text-center text-[25px]">User Profile</h1>
      <div className=" p-4 rounded-[15px] flex flex-col justify-center items-center border-1 w-[30%] mx-auto mt-10">
        <div>
          <img src="" className="h-[200px] rounded-[15px]" />
        </div>
        <div className="mt-4">
          <p className="my-2 ">
            <span className="font-[700] w-[90px] inline-block">Name:</span>{" "}
            {"dummy"}{" "}
          </p>
          <p className="my-2 ">
            <span className="font-[700] w-[90px] inline-block">User Name:</span>{" "}
            {"dummy"}{" "}
          </p>
          <p className="my-2 ">
            <span className="font-[700] w-[90px] inline-block">Gender:</span>{" "}
            {"dummy"}{" "}
          </p>
          <p className="my-2 ">
            <span className="font-[700] w-[90px] inline-block">Email:</span>{" "}
            {"dummy"}{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default UserProfile;
