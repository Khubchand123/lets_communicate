import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"", email: "", password: "", cpassword:""}); 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password,cpassword} = credentials;
        const response = await fetch("http://localhost:4000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken); 
            navigate("/home");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <label htmlFor="exampleInputEmail1">Enter your name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password" minLength={5} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm Password" minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup