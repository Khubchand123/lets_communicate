import React,{useEffect} from 'react'
import data from './topic.json'
import {useNavigate} from "react-router-dom"
import Titem from './Titem';
const Notess = () => {
  let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
          
        }
        else {
            navigate("/login");
        }
    })
  const topic = data.topic;
  const dataList = topic.map(
    (element) =>{
      const id = element.id
      return(
        <div className='col-md-4 my-3'>
          <Titem name={element.name} id={id} key={id} url={element.url}/>
        </div>
      )
    }
  )
  return (
    <div className='container '>
      <div className='row'>
      {dataList}
      </div>
    </div>
  )
}
export default Notess
// https://ui.dev/react-router-pass-props-to-link
// export default Notes
