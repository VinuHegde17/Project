import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} controls>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </div>
  );
}

export default VideoPlayer;
