import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import { LoginPage } from "./Routes/Routes.js";
import { SignupPage } from "./Routes/Routes.js"



const App = () => { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App