import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <Router>
    <div className="App">
    <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Welcome to the Job Board!</h1>} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
