import React from "react";
import "./index.css";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Project from "./Routes/Project";
import Contact from "./Routes/Contact";
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
       <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/about" element = {<About/>}/>
        <Route exact path = "/project" element = {<Project/>}/>
        <Route exact path = "/contact" element = {<Contact/>}/>
       </Routes>
    </>
  );
}

export default App;
