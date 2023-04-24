import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();
    useEffect(() => {

    }, [location]);
    const handlelogOut=()=>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:"aliceblue"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNoteBook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} to="/home">Home</Link>
                        </li>
                        
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<button className='btn btn-primary' onClick={handlelogOut}>LogOut</button>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;