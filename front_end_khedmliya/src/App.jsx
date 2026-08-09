import { Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

function App() {


  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MainLayout>  
    </>
  )
}

export default App
