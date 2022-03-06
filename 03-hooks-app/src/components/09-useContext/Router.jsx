import { BrowserRouter , Routes, Route } from "react-router-dom";
import React from 'react'
import Home from './Home'
import About from './About'
import Login from './Login'
import Index from './Index'
import Navbar from "./Navbar";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-5">
      <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Router