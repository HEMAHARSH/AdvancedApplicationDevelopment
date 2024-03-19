
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import LoginFinal from './pages/auth/login'

import Home from './pages/user/home'
import Register from './pages/auth/register'
import ProductDetail from "./pages/user/productview";


function App() {
  
return (
  <>
  
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<LoginFinal/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/product/:id" element={<ProductDetail/>}/>
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App

 
