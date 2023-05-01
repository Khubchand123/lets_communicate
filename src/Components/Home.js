import React,{useEffect} from 'react'
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {

        }
        else {
            navigate("/login");
        }
    })
       
    
    return (
        
        <div style={{backgroundColor:"lightseagreen",marginTop:"-15px"}}>
            {localStorage.getItem('token')?<Notes/>:navigate('/login')}
        </div>

    )
}
export default Home