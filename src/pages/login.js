import React, { Component, useState } from 'react';
import "./login.css";
import md5 from 'md5';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  const [creds, setCreds] = useState({username: 'username', password: 'password'})

  // form handling before submission
  const handleInputChange = (event) => {
    const target = event.target;
    let value = event.target.value;
    const name = target.name;

    if (target.name === "password") {
      document.getElementById(name).type = "password";
      value = md5(event.target.value);
    }

    this.setState({
      [name]: value
    });

    document.getElementById(name).style.fontFamily = "Montserrat black";
  }

  // const setEmptyValue = (event) => {
  //   const name = event.target.name
  //   document.getElementById(name).value = "";

  // }

  const onSubmitClick = () => {
    navigate('/home')
  }

  return (
    <div className="login">
      <h4>Sign In</h4>
      <form >
        <div className="text_area">
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={creds.username}
            // onChange={this.handleInputChange}
            // onFocus={this.setEmptyValue}
            className="text_input"

          />
        </div>
        <div className="text_area">
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={creds.password}
            // onChange={this.handleInputChange}
            // onFocus={this.setEmptyValue}
            className="text_input"

          />
        </div>
        <input
          type="submit"
          value="SIGN IN"
          className="btn"
          onClick={onSubmitClick}
        />
      </form>
      <a className="link" href="/signup">Sign Up</a>
    </div>
  )
}

export default Login;