import './App.css';

function App() {
  return (
    <div className="App">
      <div id="home">
        <div class="nav">
        <a href="#home" class="active">Home</a>
        <a href="#projects">Projects</a>
        <a href="#projects">Resumé</a>
        </div>

        <div class="intro">
        <p>Hello, I am an undergraduate student currently pursuing my BSc in Computer Science at the Technological University of Dublin. Welcome to my page.</p>
        <p>I am actively seeking internship or entry-level job oppurtunities. <a href="mailto:manarsaighi2003@icloud.com">Get in Touch!</a></p>
        </div>

        <div class="contact">
        <a href="https://github.com/manarsaighi" class="active">Github</a>
        <a href="https://www.linkedin.com/in/manarsaighi/">LinkedIn</a>
        <a href="mailto:manarsaighi2003@icloud.com">Email me!</a>
        </div>
     
     <div>
     <h1 class="title">Saighi</h1>
     </div>
      

      </div>
     
      {/* <div id="projects">
        <div class="proj">
        <h1>1.Abstract Music Visualiser</h1>
        <h3>Group Project, Java</h3>
        <p> An abstract visual representation of a chosen song using a combination of synchronising 2D and 3D animations.</p>
        </div>

        <div class="proj">
        <h1>2. Genetic Algorithm Implementation</h1>
        <h3>Personal Project, Java</h3>
        <p> a genetic algorithm to find optimal folding of an amino acid sequence using the 2D HP model. Visualises the phenotype of a given solution candidate.</p>
         </div>

        <div class="proj">
        <h1>3. DotNet Maui Desktop Application</h1>
        <h3>Personal Project, C#</h3>
        <p> a book tracking and rating desktop application. Implemented book tracking, reviewing and recommendation features. Utilised Entity Framework for database management and deployed on Azure for cloud integration.</p>
        </div>

      </div> */}
    </div>

   
    
  );
}

export default App;
