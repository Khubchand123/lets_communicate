import { useState } from 'react';
import Reading from './Home/Components/Reading/Reading';
import News from './Home/Components/Reading/News/News';
import HomePage from './Home/HomePage';
import Signup from './Auth/Register'
import Login from "./Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Listen from "./Listening_Speaking/components/Notess";
import Data from "./Listening_Speaking/components/Home"
import Speak from "./Listening_Speaking/component4/Speaking";
import Notes from "./Components/Home";
import NoteState from "./context/notes/NoteState";
function App() {
  const [fScreen, setFScreen] = useState(0);
  document.addEventListener("dblclick", () => {
    if (fScreen == 0) {
      document.body.requestFullscreen();
      setFScreen(1);
    }
    else {
      document.exitFullscreen();
      setFScreen(0);
    }
  })
  document.onkeydown = function (e) {
    if(e.keyCode==70){
      if (fScreen == 0) {
        document.body.requestFullscreen();
        setFScreen(1);
      }
      else {
        document.exitFullscreen();
        setFScreen(0);
      }
    }
  }
  return (
    // <div>
    <NoteState>
    <BrowserRouter>
      <Navbar />
      {/* <div >
          <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" alt="" style={{position: "absolute",width: "60px",marginTop: "80vh",marginLeft: "90vw"}}/>
        </div> */}
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/homepage' element={<HomePage />}></Route>

        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route path='/reading' element={<Reading />}></Route>
        <Route path='/reading/news' element={<News key="general" pageSize={9} country="in" category="general" topic="General" />}></Route>
        <Route path="/reading/news/business" element={<News key="business" pageSize={9} country="in" category="business" topic="Business" />}></Route>
        <Route path="/reading/news/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" topic="EntertainMent" />}></Route>
        <Route path="/reading/news/general" element={<News key="general" pageSize={9} country="in" category="general" topic="General" />}></Route>
        <Route path="/reading/news/health" element={<News key="health" pageSize={9} country="in" category="health" topic="Health" />}></Route>
        <Route path="/reading/news/science" element={<News key="science" pageSize={9} country="in" category="science" topic="Science" />}></Route>
        <Route path="/reading/news/sports" element={<News key="sports" pageSize={9} country="in" category="sports" topic="Sports" />}></Route>
        <Route path="/reading/news/technology" element={<News key="technology" pageSize={9} country="in" category="technology" topic="Technology" />}></Route>

        <Route path='/listen' element={<Listen />}></Route>
        <Route path='/listen/data' element={<Data />}></Route>

        <Route path='/speak' element={<Speak />}></Route>

        <Route path='/writing' element={<Notes />}></Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
  );
}

export default App;




















