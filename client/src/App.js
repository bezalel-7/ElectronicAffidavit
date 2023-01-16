import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Auth from './components/Auth'
import Home from './components/home'

function App() {
  const [user, setLoginUser] = useState({})

  var props = {
    user: user,
    setLoginUser: setLoginUser,
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user && user._id ? (
                <Home details={props} />
              ) : (
                <Auth setLoginUser={setLoginUser} />
              )
            }
          />

          <Route
            path="/signup"
            element={<Auth setLoginUser={setLoginUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
