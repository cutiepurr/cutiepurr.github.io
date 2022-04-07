import './App.css';
import { Component } from 'react';
import About from './components/AboutComponent';
import Project from './components/ProjectComponent';
import { Footer } from './components/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Project />
        <Footer />
      </div>
    );
  }
}

export default App;
