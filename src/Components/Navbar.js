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
        localStorage.removeItem('username');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{height:"57px",color:"white",backgroundColor: "rgb(44, 82, 69)"}}>
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 my-4">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" style={{color:"white"}}><p style={{fontSize:"27px"}}>LetsCom</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link"  to="/listen" style={{color:"white"}}>Listening</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/speak" style={{color:"white"}}>Speking</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/reading" style={{color:"white"}}>Reading</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/writing" style={{color:"white"}}>Writing</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                    </form>:<div style={{display:"flex"}}><p style={{margin:"8px",color:"white"}}>Hi, {localStorage.getItem('username')}</p><button className='btn btn-primary' onClick={handlelogOut}>LogOut</button></div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;