import React from 'react'
import video from "../../Media/video.mp4";
const Player = () => {
  return (
    <div>
      <video src={video} autoPlay controls style={{width:"100%",height:"100%"}} />
    </div>
  )
}

export default Player
