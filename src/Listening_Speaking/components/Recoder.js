import React from 'react'
import { render } from "react-dom";
import pic1 from "../../logos/mic.png"
import pic2 from "../../logos/del.png"

import vmsg from "vmsg";
const recorder = new vmsg.Recorder({
    wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
});
class Recoder extends React.Component {
    state = {
        isLoading: false,
        isRecording: false,
        recordings: null
    };
    record = async () => {
        this.setState({ isLoading: true });

        if (this.state.isRecording) {
            const blob = await recorder.stopRecording();
            this.setState({
                isLoading: false,
                isRecording: false,
                recordings: URL.createObjectURL(blob)
            });
        } else {
            try {
                await recorder.initAudio();
                await recorder.initWorker();
                recorder.startRecording();
                this.setState({ isLoading: false, isRecording: true });
            } catch (e) {
                console.error(e);
                this.setState({ isLoading: false });
            }
        }
    };
    
    render() {
        const { isLoading, isRecording, recordings } = this.state;
        return (
            <React.Fragment>
                <div className=''>
                <img src={pic1} alt="" style={{width:"70px",marginLeft:"8vw"}} disabled={isLoading} onClick={this.record}></img>
                <div className="my-3 rec" style={{marginLeft:"-100px"}}>
                        {recordings!=null&&<div id="rec" style={{display:"flex",marginLeft:"8vw"}}><audio src={recordings} controls style={{width:"15vw"}}/><div style={{textAlign:"center",marginLeft:"9px",marginTop:"5px"}}><img src={pic2} onClick={()=>{this.setState({recordings:null}) }} style={{width:"45px"}}/></div></div>}
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recoder
