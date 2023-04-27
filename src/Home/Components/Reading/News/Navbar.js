import React, { Component,useEffect } from 'react'
import {Link, Outlet,useLocation} from "react-router-dom"
const Navbar=()=> {
    let location = useLocation();
    useEffect(()=>{

    },[location]);
        return (
            
                // <div className="">
                    
                    <div style={{width:"12vw",backgroundColor: "rgb(44, 82, 69)",color:"white",textAlign:"center"}} >
                       
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/business" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/business">Business</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/entertainment" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/entertainment">Entertainment</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/general" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/general">General</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/health" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/health">Health</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/science" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/science">Science</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/sports" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/sports">Sports</Link></div>
                            <div className='my-4' style={{backgroundColor:` ${location.pathname==="/Reading/News/technology" ? "cornflowerblue":""}`}}><Link className="nav-link" to="/Reading/News/technology">Technology</Link></div>
                            <Outlet/>
                        
                    </div>
                // </div>
            
        )
    
}
export default Navbar;