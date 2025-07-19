import React from 'react'
import Login from "./Pages/login"
import Signup from './Pages/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Blogpage from './Pages/Blogpage'
import BlogUpdate from './Pages/BlogUpdate'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route index element={<Homepage />} />
        <Route path='/blogpage' element={ <Blogpage/>} />
        <Route path='/blogupdate' element={ <BlogUpdate/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App