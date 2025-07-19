import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [singupdetails, setSingupdetails] = useState({
    Email: "",
    Name: "",
    Password: "",
  });
  const handleTakeSignupInfo = (e) => {
    const { id, value } = e.target;
    setSingupdetails({
      ...singupdetails,
      [id]: value,
    });
  };
  console.log(singupdetails);

  return (
    <div className="container">
      <div className="flex flex-col gap-3.5 h-screen justify-center items-center">
        <h1 className="text-2xl font-bold ">Your Blog</h1>
        <h1 className="text-xl font-medium ">Signup Your Blog</h1>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="Email">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="Email"
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="Name">Your name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            id="Name"
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="Password">Choose a Password</label>
          <input
            type="password"
            placeholder="******"
            id="Password"
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <button className="px-18 py-1 bg-blue-400 rounded font-medium text-white text-[18px] cursor-pointer">
          Signup
        </button>
        <p>
          Already have an account{" "}
          <NavLink to={"/login"} className="text-red-500">
            Login Here
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
