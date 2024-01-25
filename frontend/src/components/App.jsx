import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./home/Home";
import SignIn from "./login/Sign-in";
import SignUp from "./login/Sign-up";
import About from "./about/About";
import Suport from "./suport/Suport";
import WorkHere from "./work-here/WorkHere";
import Products from "./products/Products";

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Home/>}></Route>
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/suport" element={<Suport/>}></Route>
          <Route path="/work here" element={<WorkHere/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;