import React, { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring"; // Import necessary functions from react-spring
import './Modal.css';  // Import your CSS file

export default function Modal({ isOpen, toggleModal, title, content }) {
  const [showModal, setShowModal] = useState(isOpen); // Local state to manage modal visibility

  // Animation styles
  const springStyles = useSpring({
    opacity: isOpen ? 1 : 0, // Animate opacity
    transform: isOpen ? 'translateY(0)' : 'translateY(-20px)', // Animate position
    config: { tension: 200, friction: 20 }, // Adjust tension and friction for animation
    onRest: () => {
      // When animation is done, and isOpen is false, set showModal to false
      if (!isOpen) setShowModal(false);
    },
  });

  // Effect to sync local state with isOpen prop
  useEffect(() => {
    if (isOpen) {
      setShowModal(true); // Show modal when isOpen is true
    }
  }, [isOpen]);

  // If modal is not open and showModal is false, return null
  if (!showModal) return null;

  return (
    <animated.div style={springStyles} className="modal"> {/* Apply animated.div for spring animation */}
      <div className="overlay" onClick={toggleModal}></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button className="close-modal" onClick={toggleModal}>
          Close
        </button>
      </div>
    </animated.div>
  );
}
