// BlogHomePage.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
  const [userdata, setUserdata]= useState("")
  const location = useLocation();
  const userData = location.state;
  const navigate = useNavigate();

  const userid = userData.id

  // there will fetch blog data
  useEffect(() => {
    const getAllblog = async () => {
      try {
        const allblog = await axios.get("http://localhost:4000/getall-blog");
        const allBlogdata = allblog?.data?.data;

        setBlogs(allBlogdata);
      } catch (error) {
        console.log("error from get blog", error);
      }
    };
    getAllblog();
  }, []);
 
  // there will fetch userdata
  
 useEffect(() => {
   const getuserdata = async () => {
     try {
       const userdata = await axios.get(
         `http://localhost:4000/get-singleuser/${userid}`
       );
       const userme = userdata.data.data;




 setUserdata(userme);
      
     } catch (error) {
       console.log("error from get user", error);
     }
   };
   getuserdata();
 }, []);

  
  console.log(userdata);
  


  // ********
  const handelLogout = () => {
    navigate("/login");
  };

  const handleBlogViewPage = (blog) => {
    navigate("/blogpage", { state: blog });
  };
  const handleCreateaBlog = () => {
    navigate("/postblog");
  };
  

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="flex flex-row gap-6">
        <div className="w-[15%] bg-amber-400 h-screen flex flex-col items-center justify-between">
          <div className=" flex flex-col gap-5">
            <div className="w-[100px] h-[100px] bg-gray-300 rounded-full mt-5">
              {/* image will be here */}
            </div>

            <div className="flex flex-col justify-center items-center">
              <h3 className="font-medium text-[20px] text-gray-700">
                {userdata.userName}
              </h3>
              <h3 className="font-medium text-[18px] text-gray-700 italic">
                {userdata.createdAt?.slice(0, 10)}
              </h3>
            </div>
            <button
              className="bg-white py-2 px-3 rounded-3xl cursor-pointer"
              onClick={() => navigate("/profile")}
            >
              Profile
            </button>
            <button
              className="bg-white py-2 px-3 rounded-3xl cursor-pointer"
              onClick={handleCreateaBlog}
            >
              Create Blog
            </button>
          </div>

          <div
            className="font-bold text-[20px] text-gray-700 mb-[30px] cursor-pointer"
            onClick={handelLogout}
          >
            Log Out
          </div>
        </div>
        <div>
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
              Latest Blog Posts
            </h1>
            <div className="gap-6 flex justify-between items-center flex-wrap">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition border border-amber-400 w-[400px]"
                >
                  <img
                    src={blog.image}
                    alt={blog.blogTitle}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">
                      {blog.blogTitle}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      {blog.blogDescription}
                    </p>
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-gray-500 text-sm flex flex-col">
                        <span>By {blog.author}</span>
                        <span>{blog.createdAt}</span>
                      </div>
                      <div>
                        <button
                          className="bg-amber-400 text-white p-2 rounded-[20px] cursor-pointer"
                          onClick={() => handleBlogViewPage(blog)}
                        >
                          View Blog
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
