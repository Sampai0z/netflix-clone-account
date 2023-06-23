import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from './components/pages/Login'
import MainPage from './components/pages/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
