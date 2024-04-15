import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioPlayer from './components/AudioPlayer';

// css
import './styles/index.css';
import './styles/customize-progress-bar.css';
import VideoPlayer from './components/VideoPlayer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AudioPlayer />
    <VideoPlayer/>
  </React.StrictMode>
);
