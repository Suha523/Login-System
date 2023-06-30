import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setemail] = useState("");

  const fillUserName = (e) => {
    setUsername(e.target.value);
  };

  const fillPassword = (e) => {
    setPassword(e.target.value);
  };

  const fillEmail = (e) => {
    setemail(e.target.value);
  };
  const fillPhone = (e) => {
    setPhone(e.target.value);
  };

  const registerToDataBase = () => {
    if (username !== "" && password !== "" && phone !== "" && email !== "") {
      axios({
        method: "post",
        url: "http://localhost:4001/signup",
        data: {
          username: username,
          email: email,
          phone: phone,
          password: password,
        },
      }).then((res) => {
        // if (res.data.Status === "Done") {
        //   window.location.href = "http://localhost:3000/";
        // }
      });
    }
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='title'>
          <h2>Register Page</h2>
        </div>
        <form>
          <div className='registerInfo'>
            <input
              className='input-box'
              type='text'
              id='userName'
              placeholder='Your Username'
              onChange={fillUserName}
            ></input>

            <input
              className='input-box'
              type='email'
              id='email'
              placeholder='Your E-Mail'
              onChange={fillEmail}
            ></input>
            <input
              className='input-box'
              type='number'
              id='phone'
              placeholder='Your Phone Number'
              onChange={fillPhone}
            ></input>
            <input
              className='input-box'
              type='password'
              id='password'
              placeholder='Your Password'
              onChange={fillPassword}
            ></input>
          </div>

          <div className='button'>
            <Link
              to='/'
              id='register'
              className='btn btn-dark'
              onClick={registerToDataBase}
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
