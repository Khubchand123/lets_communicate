import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Reading from './Home/Components/Reading/Reading';
import News from "./Home/Components/Reading/News/News";
import Navbar from './Home/Components/Reading/News/Navbar';
import HomePage from './Home/HomePage';
import Carousels from './Home/Carousels';

function App() {
  return (
  <>
    <div className='header'>
      {/* <Header></Header> */}
    </div>
      {/* <Navbar></Navbar> */}
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Carousels/>}></Route> */}
        <Route path='/' element={<HomePage/>}></Route>

        <Route path='/HomePage' element={<HomePage/>}></Route>
        <Route path='/News' element={<News/>}></Route>
        <Route path='/Reading' element={<Reading/>}></Route>
        <Route path='/Reading/Navbar' element={<Navbar/>}></Route>

        
          {/* <Route exact path="/News" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/business" element={<News key="business" pageSize={9} country="in" category="business" topic="Business"/>}></Route> 
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" topic="EntertainMent"/>}></Route> 
          <Route exact path="/general" element={<News key="general" pageSize={9} country="in" category="general" topic="General"/>}></Route> 
          <Route exact path="/health" element={<News key="health"  pageSize={9} country="in" category="health" topic="Health"/>}></Route> 
          <Route exact path="/science" element={<News key="science" pageSize={9} country="in" category="science" topic="Science"/>}></Route> 
          <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" topic="Sports"/>}></Route> 
          <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" topic="Technology"/>}></Route>  */}
      {/* </Route> */}
      </Routes>
      </BrowserRouter>
  </>
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
//           <div className="container">
//             <Routes>
//               <Route exact path="/home" element={<Home />}></Route>
//               <Route exact path="/login" element={<Login />}></Route>
//               <Route exact path="/signup" element={<Signup />}></Route>
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </NoteState>
//     </>
//   );
// }

// export default App;



