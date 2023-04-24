import React from 'react'
import dial from './dialogue.json'
import Ditem from './Ditem';
// import song from '../audio/'
const Dialog = (props) => {
    // console.log(dial[1].di)\
    const id = props.id;
    console.log(id)
    const dia = dial[id];
    let first = dia.first;
    let sec = dia.sec;
    let di = dia.di;
    const renderList = di.map((item, index) =>
        index%2==0?<div key={index} className="mx-6 my-2" ><span style={{color:"blue",fontWeight: "bold"}}>{first}</span>: <span style={{fontFamily: `"Lucida Console", "Courier New", monospace`}}>"{item}"</span></div>:<div key={index} className="mx-3 " style={{}}><span style={{color:"",fontWeight: "bold"}}>{sec}</span>: <span style={{fontFamily: `"Lucida Console", "Courier New", monospace`}}>"{item}"</span></div>
    );
    return (
        <div >
            
                {
                    renderList
                }
                {/* <audio src={require("../audio/1A.mp3")}  controls style={{marginLeft:"80px"}}></audio> */}
        </div>
    )
}

export default Dialog
