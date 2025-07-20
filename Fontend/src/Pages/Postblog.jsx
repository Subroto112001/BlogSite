import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Postblog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state;

  const [blogdata, setBlogdata] = useState({
    blogTitle: "",
    blogDescription: "",
    image: null, // use null for file object
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    // If file input
    if (id === "image") {
      setBlogdata({
        ...blogdata,
        image: files[0], // use files[0] for file
      });
    } else {
      setBlogdata({
        ...blogdata,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData();
    formData.append("blogTitle", blogdata.blogTitle);
    formData.append("blogDescription", blogdata.blogDescription);
    formData.append("image", blogdata.image);

    try {
      const response = await axios.post(
        "http://localhost:4000/create-blog",
        formData
      );

    if (response.status === 200 || response.status === 201) {
      navigate("/home");
    }

    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Create Blog</h2>

        <label className="block mb-2 text-gray-700">Title</label>
        <input
          type="text"
          id="blogTitle"
          value={blogdata.blogTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Description</label>
        <textarea
          id="blogDescription"
          value={blogdata.blogDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Image</label>
        <input
          type="file"
          id="image"
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-6"
          accept="image/*"
          required
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg  cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-400 text-white rounded-lg cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Postblog;
