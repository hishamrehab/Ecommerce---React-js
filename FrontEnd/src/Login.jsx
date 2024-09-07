import React from 'react'
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [flag, setFlag] = useState(false);
    const [emailError, setEmailError] = useState();


    async function Submit(e) {
        setFlag(true);
        e.preventDefault();
        setAccept(true);
        if (password.length < 8) {
            setFlag(false);
        } else {
            setFlag(true);
        }
        try {
            if (flag) {
                let res = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: email,
                    password: password,

                }).then((response) => console.log(response.data));
            }
        }
        catch (error) {
            console.log(error.response.status)
        }
    }


    return (
        <div className="parent">
            <div className="register">
                <form onSubmit={Submit}>
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Email..." required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError == 422 && <p className="small">Email Is already been taken</p>}
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 && accept && (<p className="small">Password must be more than 8 Character</p>)}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Log In</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
