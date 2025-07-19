import React from 'react'
import Login from "./Pages/login"
import Signup from './Pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Blogpage from './Pages/Blogpage'
import BlogUpdate from './Pages/BlogUpdate'
import Postblog from "./Pages/Postblog";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route index path="/home" element={<Homepage />} />
        <Route path="/blogpage" element={<Blogpage />} />
        <Route path="/blogupdate" element={<BlogUpdate />} />
        <Route path="/postblog" element={<Postblog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App