import React, { useState, useEffect } from "react";

const UserProfilePage = () => {
  // Dummy user data — replace with real user from auth/db
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "I love writing blogs and building full-stack apps.",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user); // preload form with user info
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    // Here, you'd send a PUT/PATCH request to update user info
    // axios.put("/api/user/update", formData).then(...)

    setUser(formData);
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Profile</h2>

        {/* Profile Display */}
        {!editMode ? (
          <div className="flex flex-col items-center gap-4">
            <img
              src={user.avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
              <p className="mt-2 text-gray-700">{user.bio}</p>
            </div>
            <button
              onClick={() => setEditMode(true)}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        ) : (
          // Edit Form
          <form
            onSubmit={handleUpdate}
            className="flex flex-col gap-4 items-center"
          >
            <img
              src={formData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="w-full">
              <label className="text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>
            <div className="w-full">
              <label className="text-gray-700">Avatar URL</label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-lg"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => {
                  setFormData(user);
                  setEditMode(false);
                }}
                className="px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserProfilePage;
