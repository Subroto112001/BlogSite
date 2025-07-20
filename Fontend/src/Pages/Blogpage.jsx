import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state; // blog data passed from Homepage


  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-xl text-red-500">No blog found!</h2>
        <button
          className="mt-4 px-6 py-2 bg-amber-400 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }
  const handledelteblog = async () => {
    const blogid = blog._id;
    try {
      
      const deletethisblog = await axios.delete(
        `http://localhost:4000/delete-blog/${blogid}`
      );
      console.log(deletethisblog);
      if (!deletethisblog) {
        console.log("Can't delete this blog");
        
      }
      navigate("/home");
    } catch (error) {
      console.log("error from handledeleteblog", error);
      
    }


}
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
        <p className="text-gray-500 mb-2">{blog.blogTitle}</p>
        <p className="text-lg text-gray-700 leading-relaxed">
          {blog.blogDescription}
        </p>

        <div className=" flex flex-row gap-5 items-center">
          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-500 cursor-pointer"
          >
            ← Back
          </button>
          <button
            onClick={() => navigate("/blogupdate")}
            className="mt-6 px-6 py-2 bg-green-400 text-white rounded-lg hover:bg-green-600 cursor-pointer"
          >
            Update
          </button>
          <button
            onClick={handledelteblog}
            className="mt-6 px-6 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
