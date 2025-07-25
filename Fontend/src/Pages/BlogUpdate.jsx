import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogUpdatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state; 

 

  const handleChange = (e) => {
  
  };

  const handleSubmit = (e) => {
   
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Update Blog</h2>

        <label className="block mb-2 text-gray-700">Title</label>
        <input
          type="text"
          name="title"
       
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-4"
          required
        />

        <label className="block mb-2 text-gray-700">Description</label>
        <textarea
          name="excerpt"
      
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-4"
          rows={3}
          required
        />

        <label className="block mb-2 text-gray-700">Image URL</label>
        <input
          type="text"
          name="image"
      
          onChange={handleChange}
          className="w-full border p-2 rounded-lg mb-6"
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-400 text-white rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-amber-400 text-white rounded-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogUpdatePage;
