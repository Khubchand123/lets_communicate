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
        const response = await fetch("http://localhost:4000/api/auth/login", {
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
            navigate("/home");

        }
        else {
            alert("Invalid credentials");
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        // <section class="vh-100 tab1" >
            <div class="container h-100 my-4">

                <div class="row d-flex justify-content-center align-items-center h-100 " >
                    <div class="col-lg-12 col-xl-11" >
                        <div class="card text-black" >

                            

                            <div class="card-body p-md-5" style={{backgroundColor:"aliceblue",width:"70vw"}}>
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 but" >

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>





                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-envelope icon"></i>
                                                    <input class="input-field form-control" type={"email"} name="email" placeholder="Email" onChange={onChange} />

                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row align-items-center mb-4">
                                            <div class="form-outline flex-fill mb-0">
                                                <div class="input-icons">
                                                    <i class="fa fa-lock icon"></i>
                                                    <input class="input-field form-control" type={"password"} placeholder="Password" name="password" onChange={onChange} />

                                                </div>
                                            </div>
                                        </div>



                                       

                                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" onClick={handleSubmit} class="btn btn-primary btn-lg">Login</button>
                                        </div>
                                        <div class=" my-3 col-12 text-center mb-3 register" >
                                            New User? <Link to="/signup" class="lcolor">Register Now</Link>
                                        </div>


                                    </div>
                                    {/* <div
                                        class=" col-lg-6 col-xl-7 text-center align-items-center justify-content-center  ">

                                        <div><img src="" class="img-fluid col-xl-3" alt="Sample image" /></div>
                                        <div>
                                            <h2>Educate</h2>
                                        </div>
                                        <div class=" col-xl-11 bgrl"><img src="" class="img-fluid  mt-4"
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

