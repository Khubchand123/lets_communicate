import React,{useEffect} from 'react'
import Notes from './Notes';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate = useNavigate();
    
       
    
    return (
        
        <div>
            {localStorage.getItem('token')?<Notes/>:navigate('/login')}
        </div>

    )
}
export default Home