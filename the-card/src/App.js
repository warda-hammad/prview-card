import './App.css';

function App() {
  return (
   <div className="app">
     <div className="container">
      <div className="info">
      <h1>Get <span>insights</span> that help your business grow.</h1>
      <p>Discover the benfits of data analytics and make better descisions regariding, customer exprtience, and overall enfficiency</p>
      <div className="stats">
        <div className="stat1">
          <div>10K+</div>
          <p>COMPANIES</p>
        </div>
        <div className="stat2">
          <div>314</div>
          <p>TEMPLATES</p>
        </div>
        <div className="stat3">
          <div>12M+</div>
          <p>QUERIES</p>
        </div>
      </div>
      </div>
      <div className="image">
        <img src="images/image-header-desktop.jpg" alt="" />
      </div>
    </div>
   </div>
  );
}

export default App;
