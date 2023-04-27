import React,{useEffect} from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom';
import './Reading.css';


function Reading() {
    let navigate = useNavigate();
        useEffect(() => {
            if (localStorage.getItem('token')) {
                
            }
            else {
                navigate("/login");
            }
        })
    return (
        <>
        
        <div className='reading-section'>
            <h1>Reading</h1>
            <div className='cards'>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydGljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <button className='card-btn'>Articles</button>
                    </div>
                </div>
                <div className="card" style={{width: "18rem"}}>
                <img src="https://images.unsplash.com/photo-1576097492152-4687ccd1c6ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFydGljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <Link to='/Reading/News'>
                        <button className='card-btn'>News</button>
                        </Link>
                    </div>
                </div>
            </div>  
        </div>
        {/* <Outlet /> */}
        </>
    )
}

export default Reading;