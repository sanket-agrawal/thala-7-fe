// Modal.js
import React, { useEffect } from 'react';
import './Modal.css';

function Modal({ videoSource, logic, onClose ,message, backgroundAudio}) {
  useEffect(() => {
    const audio = new Audio(backgroundAudio);
    audio.play();

    const video = document.getElementById('modalVideo');
    video.play();

    return () => {
      video.pause();
      audio.pause();
    };
  }, [backgroundAudio]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <video id="modalVideo" className="background-video" loop muted>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="additional-content">
          <p>{message}</p>
          <p>{logic}</p>
        </div>

        <button className="close-button" onClick={onClose}>
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Modal;
