import { useState } from "react";
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Signup from './Auth/Register'
import Login from "./Auth/Login"
import Speaking from "./Listening_Speaking/component4/Speaking";
function App() {
  const [fScreen,setFScreen] = useState(0);
    document.addEventListener("dblclick",()=>{
        if(fScreen==0){
            document.body.requestFullscreen();
            setFScreen(1);
        }
        else{
            document.exitFullscreen();
            setFScreen();
        }
    })
  return (
    <>
       <NoteState>
        <BrowserRouter>
          <Navbar />  
          {/* <Alert message={"Hello"} /> */}
          <div className="container">
            <Routes>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
