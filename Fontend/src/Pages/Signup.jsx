import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"
const Signup = () => {
  const navigate = useNavigate()
  const [singupdetails, setSingupdetails] = useState({
    email: "",
    userName: "",
    password: "",
  });
  const handleTakeSignupInfo = (e) => {
    const { id, value } = e.target;
    setSingupdetails({
      ...singupdetails,
      [id]: value,
    });
  };
 

  const handleSignUp = async () => {
    const { email, userName, password } = singupdetails;
    const users = {
      email,
      userName,
      password,
    };

    const response = await axios.post("http://localhost:4000/registration", users);

    console.log(response);
    if (response.status === 200) {
      navigate("/login");
    }
  }



  // funtion end here
  return (
    <div className="container">
      <div className="flex flex-col gap-3.5 h-screen justify-center items-center">
        <h1 className="text-2xl font-bold ">Your Blog</h1>
        <h1 className="text-xl font-medium ">Signup Your Blog</h1>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            id="email"
            value={singupdetails.email}
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="userName">Your name</label>
          <input
            type="text"
            value={singupdetails.userName}
            placeholder="Enter Your Name"
            id="userName"
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="password">Choose a Password</label>
          <input
            type="password"
            value={singupdetails.password}
            placeholder="******"
            id="password"
            className="border p-2 "
            onChange={handleTakeSignupInfo}
          />
        </div>
        <button
          className="px-18 py-1 bg-blue-400 rounded font-medium text-white text-[18px] cursor-pointer"
          onClick={handleSignUp}
        >
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
