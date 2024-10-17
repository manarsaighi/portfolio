// Modal.js
import React from 'react';
import './Modal.css';  // Assuming you have some CSS for modal

export default function Modal({ isOpen, toggleModal, title, content }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-modal" onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
}
