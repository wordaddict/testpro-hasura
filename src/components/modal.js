import React from 'react';

const Modal = (props) => {
  return (
    <div className="modal">
      <div>
        <h2>Log in as:</h2>
        <button onClick={() => props.setRole('patient')}>Patient</button>
        <button onClick={() => props.setRole('receptionist')}>Receptionist</button>
        <button onClick={() => props.setRole('doctor')}>Doctor</button>
      </div>
    </div>
  )
}

export default Modal