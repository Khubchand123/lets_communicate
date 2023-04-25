import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './Register.css';
// import pic1 from "../images/register/log.jpg";
// import pic2 from "../images/register/bgr.jpg";
// import { Grid, Form, Segment, Header, Icon, Button, Message } from 'semantic-ui-react';
const Register = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = credentials;
        if (name.length == 0 || password.length == 0 || email.length == 0 || cpassword.length == 0) {
            alert("Please fill all fields");
        }
        else if (password.length < 8) {
            alert('Password Lengths should be greater than 8');
        }
        else if (password != cpassword) {
            alert('password must be same');
        } else {
            const response = await fetch("http://localhost:4000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
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
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        // <section className="vh-100 tag1 " >
            <div className="container h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black tag2" >
                            <div className="card-body p-md-5" style={{backgroundColor:"aliceblue",width:"70vw"}}>
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>



                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-user icon"></i>
                                                    <input className="input-field form-control" type={"text"}  name="name" onChange={onChange}  placeholder="Enter Username" />
                                                </div>
                                            </div>

                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-envelope icon"></i>
                                                    <input type="email" className="input-field form-control" name="email" onChange={onChange} placeholder="Enter email" />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-lock icon"></i>
                                                    <input type="password" className="input-field form-control" name="password" onChange={onChange} placeholder="Password" minLength={5} required/>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <div className="form-outline flex-fill mb-0">
                                                <div className="input-icons">
                                                    <i className="fa fa-key icon"></i>
                                                    <input type="password" className="input-field form-control" name="cpassword" onChange={onChange} placeholder="Confirm Password" minLength={5} required/>

                                                </div>
                                            </div>
                                        </div>

                                        {/* <div className="form-check d-flex mb-5">
                                            <input className="form-check-input me-2 d-flex" type="checkbox" value=""
                                                id="form2Example3c" />
                                            <label className="form-check-label" for="form2Example3">
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>
                                        </div> */}

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button className="btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>Register</button>
                                        </div>
                                        <div className=" my-3 col-12 text-center mb-3 register" >

                                            Have an account? <Link to="/login">LogIn</Link>
                                        </div>



                                    </div>
                                    {/* <div
                                        className=" col-lg-6 col-xl-7 text-center align-items-center justify-content-center order-1 order-lg-2">

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
export default Register;