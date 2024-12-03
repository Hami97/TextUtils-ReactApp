/* eslint-disable react/jsx-no-undef */

import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //my-3 is a class in bootstrap that 
  // margin the element from top 
  // and bottom by 1rem
  const [mode, setMode] = useState('light'); //Whether Dark Mode is enabled or not
  const [ alert, setAlert] = useState(null);
  
  const showAlert = (message , type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled", "success");
      }
      else
      {
        setMode('light');
        document.body.style.backgroundColor = '#ffffff';
        showAlert("Light mode has been enabled", "success");
      }
  }
    //For page title to change on every page
    //document.title = 'TextUtils - About';
  return (
    <>
    <Router>
      <Navbar 
        title= "TextUtils" 
        //about = "About Us"
        mode = {mode} toggleMode = {toggleMode}
      />
      <Alert alert = {alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<TextForm showAlert = {showAlert} heading= "Enter the text to analyze below" mode= {mode} />} />
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;
