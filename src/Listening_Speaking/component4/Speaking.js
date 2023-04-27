import React,{useEffect,useContext, useState} from 'react'
import noteContext from "../../context/notes/noteContext"
import { useNavigate } from 'react-router-dom';
import Recoder from "../components/Recoder"
const Speaking = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
          console.log(localStorage.getItem('token'))
        }
        else {
            navigate("/login");
        }
    })
    const ques = [

        "Tell me about yourself.",
        "Why do you want to work for our company?",
        "What are your greatest strengths and weaknesses?",
        "Why are you looking for a change?",
        "Tell me about the gap in your resume.",
        "How would you rate yourself on a scale of 1 to 10?",
        "What is your biggest achievement so far?",
        "Where do you see yourself in 5 years?",
        "Why should we hire you?",
        "How do you deal with criticism?"

    ]
    return (
        <div style={{ backgroundColor:"rgb(162,167,154)",marginTop:"-10px" }}>
            {
                ques.map((q,i) => {
                    return (
                        // <div>
                        <div style={{marginLeft:"15vw" } } >
                            <p className='my-2' style={{color:"white",fontSize:"24px"}}>{i+1}. {q}</p>
                            <textarea placeholder="Type Here...." style={{ backgroundColor: "#2c5245", color: "white" ,fontSize:"24px",width:"70vw",height:"40vh",borderRadius:"4px",border:"#2c5245",boxShadow:"1px 7px 10px 5px #726666"}} name="" id="" cols="150" rows="10"></textarea>
                            <div>
                                <Recoder/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Speaking
