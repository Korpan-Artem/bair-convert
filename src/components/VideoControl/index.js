import play from "../../images/play.svg";
import pause from "../../images/pause-button.svg";
import React from "react";
import "./styles.css";

const VideoControl = ({ isPaused, toggleVideoPlay, progress=1}) => {
  const circumferenceSmall = 32 * 2 * Math.PI;
  const circumferenceLarge = 52 * 2 * Math.PI;

  return (
    <div className="video-box-play" onClick={toggleVideoPlay}>
      {isPaused ? (
        <img src={play} alt="play-button" className={"play-button"} />
      ) : (
        <div className={"pause-wrapper"}>
          <img className="image-pause" src={pause} alt="" />
          <svg
            className="progress-ring display-desktop"
            width="120"
            height="120"
            style={{
              strokeDasharray: `${circumferenceLarge} ${circumferenceLarge}`,
              strokeDashoffset:
                circumferenceLarge - (isNaN(progress) ? 0 : progress / 100) * circumferenceLarge,
            }}
          >
            <circle
              className="progress-ring__circle"
              stroke="white"
              strokeWidth="4"
              fill="transparent"
              r="52"
              cx="60"
              cy="60"
            />
          </svg>
          <svg
            className="progress-ring hide-desktop"
            width="80"
            height="80"
            style={{
              strokeDasharray: `${circumferenceSmall} ${circumferenceSmall}`,
              strokeDashoffset:
                circumferenceSmall - (isNaN(progress) ? 0 : progress / 100) * circumferenceSmall,
            }}
          >
            <circle
              className="progress-ring__circle"
              stroke="white"
              strokeWidth="4"
              fill="transparent"
              r="32"
              cx="40"
              cy="40"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default VideoControl;
