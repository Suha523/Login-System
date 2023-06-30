import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function App() {
  const [headerUserName, setHeaderName] = useState("");
  const firstTimeIn = () => {
    axios({
      method: "get",
      url: "http://localhost:4001/user",
    }).then((res) => {
      setHeaderName(res.data);
    });
  };
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login setHeaderName={setHeaderName} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home firstTimeIn={firstTimeIn} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
