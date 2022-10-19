import React from "react"
import { useVideoControl } from "../../hooks"
import VideoControl from "../VideoControl"

import "./styles.css"




const VideoControlWithoutPause = ({ videoUrl, }) => {
  const [videoRef, isPaused, toggleVideoPlay, progress] = useVideoControl()

    return (
      <>
        <video id="myVideo" src={videoUrl} width="auto" height="100%" ref={videoRef} muted="muted" className="main_banner_video-promo"></video>
        <VideoControl
          isPaused={isPaused}
          toggleVideoPlay={toggleVideoPlay}
          progress={progress}
        />
      </>
    )
  }


export default VideoControlWithoutPause