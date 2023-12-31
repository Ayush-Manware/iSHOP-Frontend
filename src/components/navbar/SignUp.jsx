import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom" 

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  useEffect(()=>{
    const auth = localStorage.getItem('user')
    if(auth){
      navigate('/')
    }
  })

  const getFormData = async () => {
    console.log(name, email, password);
    let getData = await fetch("https://e-comm-gc3t.onrender.com/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData = await getData.json();

    if(getData){
      localStorage.setItem("user", JSON.stringify(getData))
      navigate('/')
    }
  };

  return (
    <div className="formDiv">
      <h1>Sign-up</h1>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="Password"
        name="pasword"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="button" className="btn" onClick={getFormData}>
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
