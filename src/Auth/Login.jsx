import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css';
import {Link} from "react-router-dom"



// import pic1 from "../images/login/logo.jpg";
// import pic2 from "../images/login/bglo.jpg";
// import { Grid, Form, Segment, Header, Icon, Button, Message } from 'semantic-ui-react';
const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            localStorage.setItem('username',json.name);
            navigate("/");

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        // <section className="vh-100 tab1" >
            <div className="container h-100 my-4">

                <div className="row d-flex justify-content-center align-items-center h-100 " >
                    <div className="col-lg-12 col-xl-11" >
                        <div className="card text-black" >

                            

                            <div className="card-body p-md-5" style={{backgroundColor:"aliceblue",width:"70vw"}}>
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 but" >

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>





                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-envelope icon"></i>
                                                    <input className="input-field form-control" type={"email"} name="email" placeholder="Email" onChange={onChange} />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-lock icon"></i>
                                                    <input className="input-field form-control" type={"password"} placeholder="Password" name="password" onChange={onChange} />

                                                </div>
                                            </div>
                                        </div>



                                       

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-lg">Login</button>
                                        </div>
                                        <div className=" my-3 col-12 text-center mb-3 register" >
                                            New User? <Link to="/signup" className="lcolor">Register Now</Link>
                                        </div>


                                    </div>
                                    {/* <div
                                        className=" col-lg-6 col-xl-7 text-center align-items-center justify-content-center  ">

                                        <div><img src="" className="img-fluid col-xl-3" alt="Sample image" /></div>
                                        <div>
                                            <h2>Educate</h2>
                                        </div>
                                        <div className=" col-xl-11 bgrl"><img src="" className="img-fluid  mt-4"
                                            alt="Sample image" /></div>
                                    </div> */}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        // </section>

    );
}
export default Login;

