import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async() => {
    console.warn({ email, password });
    let result = await fetch("http://localhost:5000/login" , {
      method: "POST",
      body : JSON.stringify({email , password}),
      headers: {
        "Content-Type" : "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if(result){
      alert("Login Success");
    }else{
      alert('No user found');
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        placeholder="Enter Email"
        className="inputBox"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        className="inputBox"
        value={password}
        onChange={handlePassword}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
