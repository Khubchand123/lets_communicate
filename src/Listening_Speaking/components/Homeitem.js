import React from 'react'
import Dialog from './Dialog'
const Homeitem = (props) => {
    const id = props.id
    const handle = ()=>{
        props.setId(id%3==0?3:id%3);
    }
    return (
        
        <div className="card  mx-3 my-3  " onClick={handle} style={{ width: "18rem" }} >
            <img className="card-img-top" src={require(`../imagesin/${id}A.jpg`)} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.atopic}</h5>
                <p className="card-text">{props.btopic}</p>
            </div>
        </div>
    )
}

export default Homeitem
