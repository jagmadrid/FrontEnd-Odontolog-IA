import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import './styles/style.css';

const App = () => {
  
  
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />

          {/*<Route path="/" element={<Home/>} />*/}
        </Routes>
    </div>
  )
}

export default App;
