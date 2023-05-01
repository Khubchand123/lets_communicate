import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import Noteitem from "./Noteitem";
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';
const Notes = () => {
    let navigate = useNavigate();
    const context = useContext(noteContext);

    const { notes, getNotes } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        }
        else {
            navigate("/login");
        }
    }, [])
    const addnote = () => {
        return (
            <AddNote />
        )
    }
    return (
        <>
            
            <div className="row my-3 mx-4">
                <h2>Your Notes</h2>

                {notes.length === 0 && 'No notes to display'}
                <div className="" style={{ display: "contents" }}>
                    {
                        notes.map((note) => {
                            return <Noteitem key={note._id} note={note} />;
                        })
                    }
                </div>
            </div>
            <AddNote/>
        </>
    )
}

export default Notes
