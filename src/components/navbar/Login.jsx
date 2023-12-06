import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async ()=>{
        console.log(email, password)
        let result = await fetch("https://e-comm-gc3t.onrender.com/login",{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        result = await result.json()

        if(result.name){
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/all')
        }else{
            alert("Enter Correct Details")
        }
        
    }

  return (
    <div className="formDiv">
      <h1>Login</h1>

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

      <button type="button" className="btn" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login