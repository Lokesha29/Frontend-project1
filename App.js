
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Library from './pages/Library'
import { checkLogin } from './services/auth'
import './App.css'
const App = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    ;(async () => {
      let result = await checkLogin()
      setLogin(result)
    })()
  }, [])
  useEffect(()=>{
    if(login) {
      navigate("/library")
    }
  },[login])

  return (
      <div className="App">
      <Routes>
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/library" element={<Library />} />
      </Routes>
    </div>
  )
}

export default App
