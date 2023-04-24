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
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className="container mx-2"> 
                    {notes.length===0 && 'No notes to display'}
                </div>
                {
                    notes.map((note) => {
                        return <Noteitem key={note._id} note={note} />;
                    })
                }
            </div>
            
        </>
    )
}

export default Notes
