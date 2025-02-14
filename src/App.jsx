import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { setLocalStorage } from './utils/localStorage'

function App() {

  useEffect(() => {
    setLocalStorage()
  },)
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    </>
  )
}

export default App
