import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const login = () => {
    const [logindetails, setLogindetails] = useState({
      email: "",

      password: "",
    });
  
  const [homeinfo, sethomeinfo]= useState({})
  const navigate = useNavigate()
  
      const handleTakeLoginInfo = (e) => {
        const { id, value } = e.target;
        setLogindetails({
          ...logindetails,
          [id]: value,
        });
      };


const handleLogin = async () => {
  const { email, password } = logindetails;
  const users = { email, password };

  try {
    const response = await axios.post("http://localhost:4000/login", users);
    console.log(response.data);

    if (response.status === 200) {
      const userInfo = response.data.user; 
      console.log(userInfo);
      
      navigate("/home", { state: { id: userInfo.id } });
    }
  } catch (error) {
    console.error("Login failed", error);
  }
};

  
  
  
  return (
    <div className="container">
      <div className="flex flex-col gap-3.5 h-screen justify-center items-center">
        <h1 className="text-2xl font-bold ">Your Blog</h1>
        <h1 className="text-xl font-medium ">SignUp Your Blog</h1>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            id="email"
            className="border p-2 "
            onChange={handleTakeLoginInfo}
          />
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            placeholder="*******"
            id="password"
            className="border p-2 "
            onChange={handleTakeLoginInfo}
          />
        </div>
        <button
          className="px-19 py-1 bg-blue-400 rounded font-medium text-white text-[18px] cursor-pointer"
          onClick={handleLogin}
        >
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
