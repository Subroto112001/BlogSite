// BlogHomePage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleBlogs = [

  {
    id: 1,
    title: "How to Build a Blog in React",
    excerpt:
      "Learn step-by-step how to create a blog using React and Firebase...",
    image: "https://source.unsplash.com/random/800x600?blog",
    author: "John Doe",
    date: "July 17, 2025",
  },
  {
    id: 2,
    title: "Firebase Auth Made Easy",
    excerpt:
      "This guide simplifies Firebase Authentication with code examples...",
    image: "https://source.unsplash.com/random/800x600?auth",
    author: "Jane Smith",
    date: "July 15, 2025",
  },
  {
    id: 3,
    title: "Top 10 UI Libraries for React",
    excerpt:
      "Explore the best UI libraries that will save you time and effort...",
    image: "https://source.unsplash.com/random/800x600?ui",
    author: "Alex Ray",
    date: "July 10, 2025",
  },
];

const Homepage = () => {
  const [blogs, setBlogs] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    // Replace with API or Firebase call later
    setBlogs(sampleBlogs);
  }, []);



  const handelLogout = () => {
    navigate("login");
  }

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
              {" "}
              <h3 className="font-medium text-[20px] text-gray-700">
                Demo name
              </h3>
              <h3 className="font-medium text-[18px] text-gray-700 italic">
                Since 2012
              </h3>
            </div>
            <button className="bg-white py-2 px-3 rounded-3xl cursor-pointer" onClick={handleCreateaBlog}>Create Blog</button>
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
                    alt={blog.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                    <div className="flex flex-row justify-between items-center">
                      <div className="text-gray-500 text-sm flex flex-col">
                        <span>By {blog.author}</span>
                        <span>{blog.date}</span>
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
