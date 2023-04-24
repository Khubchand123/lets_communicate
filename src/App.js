import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Signup from './Auth/Register'
import Login from "./Auth/Login"

function App() {
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
