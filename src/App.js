// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Darkmode has been enabled!", "success");
      document.title = "TextUtlis - Darkmode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enabled!", "success");
      document.title = "TextUtlis - Lightmode";
    }
  }
  return (
    <>
      {/* Router Code for Hosting on other platforms  */}
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>

      {/* Code for Hosting via Github Pages
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert} />
        <About/>
      </div> */}

    </>
  )
}

export default App;