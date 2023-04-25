// import './App.css';
import Reading from './Home/Components/Reading/Reading';
// import Navbar from './Home/Components/Reading/News/Navbar';
import News from './Home/Components/Reading/News/News';
import HomePage from './Home/HomePage';
import Signup from './Auth/Register'
import Login from "./Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Listen from "./Listening_Speaking/components/Notess";
import Data from "./Listening_Speaking/components/Home"
import Speak from "./Listening_Speaking/component4/Speaking";
function App() {
  return (
    // <div>

      <BrowserRouter>
        <Navbar />
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

          <Route path='/listen' element={<Listen/>}></Route>
          <Route path='/listen/data' element={<Data/>}></Route>

          <Route path='/speak' element={<Speak/>}></Route>
        </Routes>
      </BrowserRouter>
    // {/* </div> */}
  );
}

export default App;

















// import { useState } from "react";
// import Navbar from "./Components/Navbar"
// import Home from "./Components/Home"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NoteState from "./context/notes/NoteState";
// import Alert from "./Components/Alert";
// import Signup from './Auth/Register'
// import Login from "./Auth/Login"
// import Speaking from "./Listening_Speaking/component4/Speaking";
// function App() {
//   const [fScreen,setFScreen] = useState(0);
//     document.addEventListener("dblclick",()=>{
//         if(fScreen==0){
//             document.body.requestFullscreen();
//             setFScreen(1);
//         }
//         else{
//             document.exitFullscreen();
//             setFScreen();
//         }
//     })
//   return (
//     <>
//        <NoteState>
//         <BrowserRouter>
//           <Navbar />  
//           {/* <Alert message={"Hello"} /> */}
//           {/* <div className="container"> */}
//             <Routes>
//               <Route exact path="/home" element={<Home />}></Route>
//               <Route exact path="/login" element={<Login />}></Route>
//               <Route exact path="/signup" element={<Signup />}></Route>
//             </Routes>
//           {/* </div> */}
//         </BrowserRouter>
//       </NoteState>
//     </>
//   );
// }

// export default App;



