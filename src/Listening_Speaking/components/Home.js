import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import sdata from './sub_topic.json'
import { Link } from "react-router-dom"
import { Button } from 'semantic-ui-react'
import Homeitem from './Homeitem'
import Dialog from './Dialog'
import Recoder from './Recoder'
const Home = () => {
    // const location = useLocation()
    const data = sdata;
    const [id, setid] = useState(1);
    const [cid, setcid] = useState('A');
    const [colorB, setColorB] = useState('');
    const [colorC, setColorC] = useState('');
    // const [fScreen,setFScreen] = useState(0);
    // document.addEventListener("dblclick",()=>{
    //     if(fScreen==0){
    //         document.body.requestFullscreen();
    //         setFScreen(1);
    //     }
    //     else{
    //         document.exitFullscreen();
    //         setFScreen();
    //     }
    // })
    return (
        
        <div className='d-flex' style={{ backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" }}>
            <div style={{ overflow: "scroll", width: "21rem", height: "100vh", backgroundColor: "red" }}>
                {
                    data.map(
                        (element) => {
                            const id = (element.id)
                            return (
                                <div className=''>
                                    <Homeitem key={element.id} id={element.id} atopic={element.atopic} btopic={element.btopic} setId={setid} />
                                </div>
                            )
                        }
                    )
                }

            </div>
            <div>
                <div className='d-flex' >
                    <img className='my-3 mx-3'src={require(`../imagesin/${id}A.jpg`)} alt="" style={{ width: "130px", height: "160px" }} />
                    <div>
                        <div style={{ marginTop: "25px", marginLeft: "18px" }}>
                            <h4>{data[id - 1].atopic}</h4>

                            <h5>{data[id - 1].btopic}</h5>
                        </div>
                        <audio className='my-3' src={require(`../audio/${id}${id == 1 ? cid : 'A'}.mp3`)} controls style={{ marginLeft: "15px" }}></audio>
                    </div>
                    <div style={{ marginLeft: "200px", marginTop: "20px" }}>

                        <img src={require(`../imagec/CATHY.jpg`)} alt="" style={{ width: "130px", height: "110px" }} />
                        <img src={require(`../imagec/MOM.jpg`)} className='mx-5' alt="" style={{ width: "130px", height: "110px" }} />
                        <div><pre>      CATHY                 MOM</pre></div>
                    </div>
                </div>
                <div className="d-flex">
                    <div className='dia my-2' style={{ marginLeft: "150px", overflow: "scroll", width: "630px", height: "73vh", backgroundColor: "cyan" }}>

                        <Dialog id={id} />
                    </div>
                    <div>
                        <div style={{ marginLeft: "75px", marginTop: "15vh", textAlign: "center",background:"lightyellow" }}>
                            <div>
                                FOR PRACTICE
                            </div>
                            <div className='my-3'>
                                Choose Your Partner
                            </div>
                            <div className='my-3'>
                                <button className='mx-3' onClick={() => { setcid('B'); setColorB('red'); setColorC('') }} style={{ background: colorB }}>CATHY</button>
                                <button className='mx-3' onClick={() => { setcid('C'); setColorC('red'); setColorB('') }} style={{ background: colorC }}>MOM</button>
                            </div>
                            <div>
                                <button className='my-3' onClick={() => { setcid('A'); setColorC(''); setColorB('') }}>REFRESH</button>
                            </div>
                        </div>
                        <div className='my-3' style={{ marginLeft: "130px",position:"absolute" }}>
                            <Recoder />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
