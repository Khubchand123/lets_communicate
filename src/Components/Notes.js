import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from "./Noteitem";
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    let navigate = useNavigate();
    const context = useContext(noteContext);
    
    const {notes, getNotes} = context;
    const {topics,fetchTopics} = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            navigate("/login");
        }
    }, [])
    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchTopics()
        }
        else{
            navigate("/login");
        }
    }, [])
    return (
        <>
            {/* <AddNote /> */}
            <div className="row my-3 mx-4">
                <h2>Your Notes</h2>
                
                    {notes.length===0 && 'No notes to display'}
                <div style={{display:"flex"}}>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />;
                    })
                }
                <div onClick={alert(1)}>
                <i class="fa-solid fa-plus" style={{marginTop:"17vh"}}></i>
                </div>
                </div>
            </div>
            
        </>
    )
}

export default Notes
