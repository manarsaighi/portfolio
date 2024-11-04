import React, { useEffect, useRef } from 'react';
import './App.css';

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
          } else {
            // Element is out of view
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup the observer when component unmounts
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <div id="home" className="fade-in" ref={(el) => (sectionsRef.current[0] = el)}>
        <h1>Home</h1>
      </div>

      <div id="projects" className="fade-in" ref={(el) => (sectionsRef.current[1] = el)}>
        <h1>Projects</h1>
        <p>Section testing for projects.</p>
      </div>

      <div id="contact" className="fade-in" ref={(el) => (sectionsRef.current[2] = el)}>
        <h1>Contact</h1>
        <p>Section testing for contact.</p>
      </div>
    </div>
  );
}

export default App;
