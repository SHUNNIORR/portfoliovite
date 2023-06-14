import React,{Fragment} from 'react'
import "./Cover.css";
import coverVideo from "./../../assets/video-experimento.mp4"
import icono from "./../../assets/down-arrow.svg"

export const Cover = ({isScrolling}) => {
    return (
        <Fragment>
            <div className="cover-container">
                <video className="video" src={coverVideo} autoPlay loop muted></video>
                <h1 className="tracking-in-contract-bck">Jorge Perez(SHUNNIOR).</h1>
                <p className="tracking-in-contract-bck" > <i>FullStack React.js Angular & JAVA jr developer.</i></p>
                <img width="50px" className={`scale-up-center icono ${isScrolling>200? "scrolling-icono":null}`} src={icono}/>
            </div>
        </Fragment>
        
        
    )
}
export default Cover