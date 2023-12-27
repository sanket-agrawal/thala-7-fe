// InputForm.js
import React, { useState } from 'react';
import { anaylzeString } from '@/utils/helper';
import Modal from './Modal.js';
import './style.css';

function InputForm() {
  const [inputValue, setInputValue] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [logic,setLogic] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = () => {
    const response = anaylzeString(inputValue);
    setLogic(response.logic);
    setMessage(response.message);
    if(response){
      setShowModal(true);
      setInputValue(''); 
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <div>
       <form id='input'>
        <label>Enter Anything : </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          required
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {showModal && (
        <Modal
        message = {message}
        logic={logic}
        backgroundAudio='/dhoni_music.mp3'
          videoSource='/dhoni.mp4'
          onClose={closeModal} 
          />
      )}
    </div>
    
  );
}

export default InputForm;
