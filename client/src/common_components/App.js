import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from './Signup'

function App() {
  
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('/me')
    .then((r) => {
      if(r.ok){
        r.json()
        .then((data) => setUser(data))
      }
    })
  }, [])

  return(
    <LoginForm />
  )
}

export default App;
