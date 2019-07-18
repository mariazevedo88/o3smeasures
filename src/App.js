import React from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import logo from './logo.png';
import action from './action.png';
import marketplace from './marketplace.png';
import measuring from './measuring.png';
import graph from './graph.png';
import './App.css';

function download() {
   window.location = "https://github.com/mariazevedo88/o3smeasures-tool/releases/download/v.1.3.1/o3smeasures_1.3.1.jar";
}

function App() {
  return (
    <Router>
      <div>
        <Route path='/update' component={() => {
          window.location = "https://raw.githubusercontent.com/mariazevedo88/o3smeasures-plugin/master/site.xml";
          return null;
        }}/>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>An Eclipse plug-in to evaluate software internal quality of Java projects.</h3>
          <Link className="App-link" to="https://github.com/mariazevedo88/o3smeasures-tool/releases/" rel="noopener noreferrer" target="_blank">Latest releases</Link>
        </header>
        <div className="App-body">
          <h4>How to install?</h4>
          <p>1. Download the .jar from o3smeasures-tool <b>latest release</b> page and paste it on the dropins directory <b>(eclipse -> dropins)</b>.</p>

          <button className="btn" onClick={download}><i className="fa fa-download"></i> <b>Download</b></button>

          <p><b>or</b></p>
          <p>2. Run Eclipse, go to Help menu -> Install New Software... On the opening dialog add a new Remote site named <b>o3smeasures </b> 
           with the following url <Link className="App-link" to="https://raw.githubusercontent.com/mariazevedo88/o3smeasures-plugin/master/site.xml">https://raw.githubusercontent.com/mariazevedo88/o3smeasures-plugin/master/site.xml </Link> 
           and follow the instructions.</p>

          <p><b>or</b></p>
          <p>3. Run Eclipse, go to Help menu -> Eclipse Marketplace... On the opening dialog, search for <b>o3smeasures</b>. Finding the plugin, click on the <b>Install</b> button
          and follow the instructions.</p>
          <img src={marketplace} className="App-images" alt="o3smeasures measure installation on Eclipse Marketplace" />

          <h4>How to use?</h4>
          <p>After installed the o3smeasures project into your workspace, select a Java project to be measured and with the right mouse button,
           go to <b>O3SMeasures -> Measure.</b></p>
          <img src={action} className="App-images" alt="o3smeasures measure action demonstration" />

          <h4>calculating...</h4>

          <img src={measuring} className="App-images" alt="o3smeasures measuring progress" />

          <h4>... and seeing the results</h4>

          <img src={graph} className="App-images" alt="o3smeasures graphic result" />
        </div>
        <footer className="App-footer">
          <b>© 2019 - Mariana Azevedo</b>
        </footer>
      </div>
    </Router>
  );
}

export default App;
