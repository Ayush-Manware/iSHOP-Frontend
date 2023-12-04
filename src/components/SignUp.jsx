import React, { useState } from 'react'

const SignUp = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const getFormData = ()=>{
        console.log(name, email, password)
    }

  return (
    <div className="signupDiv">
        <h1>Sign-up</h1>

        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Name" name="name" value={name} required onChange={(e)=> setName(e.target.value)} />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Email" name="email" value={email} required onChange={(e)=> setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" name="pasword" value={password} required onChange={(e)=> setPassword(e.target.value)} />

        <button type='button' className='btn' onClick={getFormData}>Sign up</button>
    </div>
  )
}

export default SignUp