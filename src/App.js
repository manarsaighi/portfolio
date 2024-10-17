import './App.css';
import React, { useState } from 'react';
import Modal from './Modal';  // Import the Modal component

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
        {/* <div className="nav">
          <a onClick={() => openModal(4)} className="active">Resumé</a>
        </div> */}

        <div className="intro">
          <p>Hello, I am an undergraduate student currently pursuing my BSc in Computer Science at the Technological University of Dublin. Welcome to my page.</p>
          <p>I am actively seeking internship or entry-level job opportunities. <a href="mailto:manarsaighi2003@icloud.com">Get in Touch!</a></p>
        </div>

        <div>
          <h1 className="title">Saighi</h1>
          {/* <h6>Work in progress... Last updated 17/10/24</h6> */}
        </div>
        

        {/* Projects Section */}
        <div id="projects">
          <div className="proj" onClick={() => openModal(1)}>
            <h1>i. Abstract Music Visualiser</h1>
            <h3>Group Project, Java</h3>
            <p>An abstract visual representation of a chosen song using a combination of synchronizing 2D and 3D animations.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(2)}>
            <h1>ii. Genetic Algorithm Implementation</h1>
            <h3>Personal Project, Java</h3>
            <p>A genetic algorithm to find the optimal folding of an amino acid sequence using the 2D HP model. Visualises the phenotype of a given solution candidate.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(3)}>
            <h1>iii. DotNet Maui Desktop Application</h1>
            <h3>Personal Project, C#</h3>
            <p>A book tracking and rating desktop application. Implemented book tracking, reviewing, and recommendation features. Utilized Entity Framework for database management and deployed on Azure for cloud integration.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(5)}>
            <h1>iv. Game Logging Website</h1>
            <h3>Personal Project, React, Node.js</h3>
            <p>A book tracking and rating desktop application. Implemented book tracking, reviewing, and recommendation features. Utilized Entity Framework for database management and deployed on Azure for cloud integration.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(6)}>
            <h1>v. Prim, Kruskal, Dijkstra</h1>
            <h3>Personal Project, C</h3>
            <p>A book tracking and rating desktop application. Implemented book tracking, reviewing, and recommendation features. Utilized Entity Framework for database management and deployed on Azure for cloud integration.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(3)}>
            <h1>vi. Vape Quitting App</h1>
            <h3>Group Project, C#</h3>
            <p>Collaborated remotely with classmates during a study exchange to develop a vape cost tracking app. Presented weekly progress to a client and a panel of lecturers. Utilized Java and Firebase for backend storage and cloud services.</p>
          </div>
          <hr></hr>

          <div className="proj" onClick={() => openModal(3)}>
            <h1>vii. DotNet Maui Desktop Application</h1>
            <h3>Personal Project, C#</h3>
            <p>A book tracking and rating desktop application. Implemented book tracking, reviewing, and recommendation features. Utilized Entity Framework for database management and deployed on Azure for cloud integration.</p>
          </div>
          <hr></hr>
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
            </>
          )}        
          />
        <Modal
          isOpen={activeModal === 2}
          toggleModal={closeModal}
          title="Genetic Algorithm Implementation"
          content="A genetic algorithm to find the optimal folding of an amino acid sequence using the 2D HP model."
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
        title="Your Modal Title"
        content={(
          <img src='/CV.jpg'></img>
          
        )}
        
      />

        {/* Contact Section */}
        <div className="contact">
          <a href="https://github.com/manarsaighi" className="active">Github</a>
          <a href="https://www.linkedin.com/in/manarsaighi/" className="active">LinkedIn</a>
        </div>

        
      </div>
    </div>
  );
}

export default App;
