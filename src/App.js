
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import Home from './Components/Home/Home';

import Navbar from './Components/Navbar';
import Project from './Components/Projects/Project';
function App() {
  return (
    <div className="App">
 

    <Navbar />
  
    <Home />
    <About />
    <Project />
  <Contact />
      
         
    </div>
  );
}

export default App;
