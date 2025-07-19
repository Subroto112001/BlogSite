// BlogHomePage.jsx
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    // Replace with API or Firebase call later
    setBlogs(sampleBlogs);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Latest Blog Posts
        </h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                <div className="text-gray-500 text-sm flex justify-between items-center">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
