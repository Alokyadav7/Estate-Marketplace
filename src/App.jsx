import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import About from "./Pages/About.jsx";
import Profile from "./Pages/Profile.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
