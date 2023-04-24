import React from 'react'
import { render } from "react-dom";
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
                <img src="https://w7.pngwing.com/pngs/720/660/png-transparent-google-assistant-brand-google-search-google-chrome-google-logo-color-android.png" alt="" style={{width:"70px"}} disabled={isLoading} onClick={this.record}></img>
                <div className="my-3 rec" style={{marginLeft:"-100px"}}>
                        {recordings!=null&&<div id="rec"><audio src={recordings} controls /><div style={{color:"red",textAlign:"center"}}><i class="fa-solid fa-trash" onClick={()=>{this.setState({recordings:null})}} /></div></div>}
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recoder
