import React from "react"
import "./styles.css"
import VideoControlWithoutPause from "./VideoControlWithoutPause"

const VideoContainer = ({ poster, videoURL }) => {
  return (
    <>
      <VideoControlWithoutPause videoUrl={videoURL} />
    </>
  )
}

export default VideoContainer
