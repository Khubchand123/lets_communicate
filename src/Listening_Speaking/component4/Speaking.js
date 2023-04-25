import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Recoder from "../components/Recoder"
const Speaking = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('token')) {
          
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
        <div style={{ backgroundImage: "radial-gradient(red, yellow, green)" }}>
            {
                ques.map((q) => {
                    return (
                        // <div>
                        <div style={{ textAlign: "center" }} >
                            <p className='my-2'>{q}</p>
                            <textarea style={{ backgroundColor: "black", color: "white" }} name="" id="" cols="150" rows="10"></textarea>
                            <div>
                                <Recoder />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Speaking
