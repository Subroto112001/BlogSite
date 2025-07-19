import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const login = () => {
    const [logindetails, setLogindetails] = useState({
      Email: "",
      
      Password: "",
    });
      const handleTakeLoginInfo = (e) => {
        const { id, value } = e.target;
        setLogindetails({
          ...logindetails,
          [id]: value,
        });
      };
      console.log(logindetails);
    
  return (
    <div className="container">
      <div className="flex flex-col gap-3.5 h-screen justify-center items-center">
        <h1 className="text-2xl font-bold ">Your Blog</h1>
        <h1 className="text-xl font-medium ">SignUp Your Blog</h1>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="Email">Email Address</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="Email"
            className="border p-2 "
            onChange={handleTakeLoginInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="Password">Enter Your Password</label>
          <input
            type="text"
            placeholder="*******"
            id="Password"
            className="border p-2 "
            onChange={handleTakeLoginInfo}
          />
        </div>
        <button className="px-19 py-1 bg-blue-400 rounded font-medium text-white text-[18px] cursor-pointer">
          Log In
        </button>
        <p>
          If you have no account{" "}
          <NavLink to={"/signup"} className="text-red-500">
            Signup Here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default login;
