import React, { Component,useEffect } from 'react'
import {Link, Outlet,useLocation} from "react-router-dom"
const Navbar=()=> {
    let location = useLocation();
    useEffect(()=>{

    },[location]);
        return (
            
                // <div className="">
                    
                    <div style={{width:"10vw"}} >
                       
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/business" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/business">Business</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/entertainment" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/entertainment">Entertainment</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/general" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/general">General</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/health" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/health">Health</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/science" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/science">Science</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/sports" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/sports">Sports</Link></div>
                            <div className='my-4 mx-3' style={{backgroundColor:` ${location.pathname==="/Reading/News/technology" ? "red":""}`}}><Link className="nav-link" to="/Reading/News/technology">Technology</Link></div>
                            <Outlet/>
                        
                    </div>
                // </div>
            
        )
    
}
export default Navbar;