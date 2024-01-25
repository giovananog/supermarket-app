import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../Home";
import SignIn from "../login/Sign-in";
import SignUp from "../login/Sign-up";

function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/signin" element={<SignIn/>}>
          </Route>
          <Route path="/signup" element={<SignUp/>}>
          </Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;