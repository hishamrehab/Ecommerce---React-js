import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className='container'>
            <nav style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                justifyContent: "space-between",

            }}>
                <div className='d-flex' >
                    <h6>Home</h6>
                    <h6>About</h6>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Link to="/register" style={{
                        textAlign: "center"
                    }} className='register-nav'>Register</Link>
                    <Link to="/login" style={{
                        textAlign: "center"
                    }} className='register-nav'>Log In</Link>

                </div>
            </nav>
        </div>
    )
}

export default Header
