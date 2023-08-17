import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    //getting entered  value in inputbox on concole.    
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('users');
    if(auth) {
        navigate('/')
    }
  })

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {
    setName('');
    setEmail('');
    setPassword('');
    alert("SignUp success")
    console.warn({ email, password });
    //fetching API connecting API with frontend
    let result  =  await fetch("http://localhost:5000/register" , {
        method:"POST",
        body: JSON.stringify({name , email , password}),
        headers : {
            "COntent-Type" : "application/json",
        },
    });
    result = await result.json()
    console.warn(result);
  };


  return (
    <div className="Signup-page">
      <h1>Signup</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        className="inputBox"
        value={name}
        onChange={handleName}
      />
      <input
        type="email"
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
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
