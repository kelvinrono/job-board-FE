import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/NavBar/NavBar'
import JobList from './components/Dashboard/JobList'


function App() {

  return (
    <Router>
      <Navbar />
    <ToastContainer />
      <Routes>
      <Route path="/" element={<h1>Welcome to the Job Board!</h1>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobList />} />

      </Routes>
  </Router>
  )
}

export default App
