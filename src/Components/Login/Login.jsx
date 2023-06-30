import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [headerName, setHeaderName] = useState("");

  const fillUserName = (e) => {
    setUsername(e.target.value);
  };

  const fillPassword = (e) => {
    setPassword(e.target.value);
  };
  const login = () => {
    if (password !== "" && username !== "") {
      axios({
        method: "post",
        url: "http://localhost:4001/login",
        data: {
          username: username,
          password: password,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status === "Done") {
          sessionStorage.setItem("username", res.data.username);
          sessionStorage.setItem("userId", res.data.userId);
          setHeaderName(res.data.username);
          window.location.href = "http://localhost:3000/home";
        } else {
          setHeaderName("Wrong username");
        }
      });
    }
  };

  return (
    <div className='login-container'>
      <div className='login'>
        <h1>login</h1>
        <div className='Header'>
          <h2>{headerName}</h2>
        </div>
        <input
          type='text'
          id='userName'
          placeholder='User Name'
          onChange={fillUserName}
        ></input>
        <input
          type='password'
          id='password'
          placeholder='Password'
          onChange={fillPassword}
        ></input>

        <button className='login-btn' onClick={login}>
          Login
        </button>

        <div>
          <p> if you do not have an account, register now!</p>
          <Link to='/signup' className='register-link'>
            signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
