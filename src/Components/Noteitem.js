import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-sharp fa-solid fa-trash mx-2" style={{color:"red"}} onClick={()=>{deleteNote(note._id)}}></i>
                    
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    )
}

export default Noteitem
