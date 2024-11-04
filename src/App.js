import './App.css';
import React, { useState } from 'react';
import Modal from './Modal';  
import brain from "./brain.png";
import brain2 from "./brain2.png";
import brain3 from "./brain3.png";
import brain4 from "./brain4.png";

function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalId) => {
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="App">
      <div id="home">
        <div className="intro">
          <p>Hello, I am an undergraduate student currently pursuing my BSc in Computer Science at the Technological University of Dublin. Welcome to my page.</p>
          <p>I am actively seeking internship or entry-level job opportunities. <a href="mailto:manarsaighi2003@icloud.com">Get in Touch!</a></p>
        </div>

        {/* Conditional rendering for projects */}
        {activeModal === null && (
          <div id="projects">
            <div id="proj" onClick={() => openModal(1)}>
              <h1>i. ABSTRACT MUSIC VISUALISER <span id="date">2023</span></h1>
              <h3>Group Project, Java</h3>
              <p>An abstract visual representation of a chosen song using a combination of synchronizing 2D and 3D animations.</p>
             
            </div>

            <div id="proj" onClick={() => openModal(2)}>
              <h1>ii. GENETIC ALGORITHM <span id="date">2024</span></h1>
              <h3>Personal Project, Java</h3>
              <p>A genetic algorithm to find the optimal folding of an amino acid sequence using the 2D HP model. Visualises the phenotype of a given solution candidate.</p>
            </div>

            <div id="proj" onClick={() => openModal(3)}>
              <h1>iii. DOT NET MAUI APPLICATION <span id="date">2024</span></h1>
              <h3>Personal Project, C#</h3>
              <p>A book tracking and rating desktop application with tracking, reviewing, and recommendation features.</p>
            </div>

            <div id="proj" onClick={() => openModal(4)}>
              <h1>iv. GAME LOGGING WEBSITE <span id="date">2023</span></h1>
              <h3>Personal Project, React, Node.js</h3>
              <p>A website for logging game sessions, tracking statistics, and sharing experiences.</p>
            </div>

            <div id="proj" onClick={() => openModal(5)}>
              <h1>v. PRIM, KRUSKAL, DIJKSTRA <span id="date">2023</span></h1>
              <h3>Personal Project, C</h3>
              <p>An implementation of common graph algorithms used for pathfinding and minimum spanning trees.</p>
            </div>
            
            <div id="proj" onClick={() => openModal(6)}>
              <h1>vi. VAPESAVER <span id="date">2024</span></h1>
              <h3>Group Project, C#</h3>
              <p>Collaborated remotely with classmates during a study exchange to develop a vape cost tracking app.</p>
            </div>
          </div>
        )}

        <div className="contact">
          <div id="about" onClick={() => openModal(8)}>
            <p> About</p>
          </div>
          <a href="https://github.com/manarsaighi" className="active">Github</a>
          <a href="https://www.linkedin.com/in/manarsaighi/" className="active">LinkedIn</a>
        </div>

        <div>
          <h1 className="title">SAIGHI</h1>
        </div>

        {/* Modal Components for Different Projects */}
        <Modal
          isOpen={activeModal === 1}
          toggleModal={closeModal}
          title="Abstract Music Visualiser"
          content={(
            <>
              <h4>Java, Processing</h4>
              <p>An abstract visual representation of a chosen song using a combination of synchronizing 2D and 3D animations.</p>
              <p>This was a group project developed in Java, focusing on visualizing music.</p>
              <a href='https://github.com/jiaqianzhang/assignment'>Check it out on Github</a>
              <br></br>
              <img className='brainpic' src={brain}></img>
              <img className='brainpic' src={brain2}></img>
              <img className='brainpic' src={brain3}></img>
              <img className='brainpic' src={brain4}></img>
            </>
          )}        
        />
        <Modal
          isOpen={activeModal === 2}
          toggleModal={closeModal}
          title="Genetic Algorithm Implementation"
          content={(
            <>
              <h4>Java</h4>
              <p>A genetic algorithm to find the optimal folding of an amino acid sequence using the 2D HP model.</p>
              <p>Part of a summer course taken during my Erasmus study exchange in Darmstadt, Germany.</p>
              <a href='https://github.com/manarsaighi/genetic-algo'>Check it out on Github</a>
            </>
          )} 
        />
        <Modal
          isOpen={activeModal === 3}
          toggleModal={closeModal}
          title="DotNet Maui Desktop Application"
          content="A book tracking and rating desktop application with tracking, reviewing, and recommendation features."
        />
        <Modal
          isOpen={activeModal === 4}
          toggleModal={closeModal}
          title="Game Logging Website"
          content="A website for logging game sessions, tracking statistics, and sharing experiences."
        />
        <Modal
          isOpen={activeModal === 5}
          toggleModal={closeModal}
          title="Graph Algorithms"
          content="An implementation of Prim's, Kruskal's, and Dijkstra's algorithms."
        />
        <Modal
          isOpen={activeModal === 6}
          toggleModal={closeModal}
          title="VAPESAVER"
          content={(
            <>
              <h4>Java, Firebase</h4>
              <p>Collaborated remotely with classmates during a study exchange to develop a vape cost tracking app.</p>
              <a href='https://github.com/HadassahJoseph/VapeSaver'>Check it out on Github</a>
            </>
          )}        
        />
        <Modal
          isOpen={activeModal === 8}
          toggleModal={closeModal}
          title="About Me"
          content={(
            <>
              <h5>I am an aspiring software developer based in Dublin, Ireland. My skills lie in a vast range of areas, Web,  . I thrive on solving problems, discussing fresh ideas, and making tech accessible for all.</h5>
              <h3>What I've been up to lately:</h3>
              <p>October</p>
              <p>29 Participated in the TU Dublin Sustainability Innovation Challenge</p>
              <p>14 New position as peer tutor at my University</p>
              <p>01 Participating in Hacktoberfest</p>
              <p>September</p>
              <p>16 New school year</p>
              <p>1 Completed Erasmus study exchange at Hochschule Darmstadt, Germany</p>
            </>
          )}        
        />
      </div>
    </div>
  );
}

export default App;
