import axios from "axios";
import { useState } from "react";

export default function signUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordR, setPasswordR] = useState('');
    const [accept, setAccept] = useState(false);
    const [flag, setFlag] = useState(false);
    const [emailError, setEmailError] = useState();

    console.log(name);
    async function Submit(e) {
        setFlag(true);
        e.preventDefault();
        setAccept(true);
        if (name === "" || password.length < 8 || passwordR !== password) {
            setFlag(false);
        } else {
            setFlag(true);
        }
        try {
            if (flag) {
                let res = await axios.post('http://127.0.0.1:8000/api/register', {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordR,
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
                    <label htmlFor="name" >Name :</label>
                    <input id="name" type="text" placeholder="Enter Name..." value={name} onChange={(e) => setName(e.target.value)} />
                    {name === '' && accept && <p className="small">Username is Required </p>}
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" placeholder="Email..." required value={email} onChange={(e) => setEmail(e.target.value)} />
                    {accept && emailError == 422 && <p className="small">Email Is already been taken</p>}
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 && accept && (<p className="small">Password must be more than 8 Character</p>)}
                    <label htmlFor="repeat">Repeat Password</label>
                    <input type="password" id="repeat" placeholder="Repeat Password..." value={passwordR} onChange={(e) => setPasswordR(e.target.value)} />
                    {passwordR !== password && accept && <p className="small">Password does not match</p>}
                    <div style={{ textAlign: "center" }}>
                        <button type="submit">Resister</button>
                    </div>
                </form>
            </div>

        </div>
    )
}



