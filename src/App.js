import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works'
import Contact from './components/Contact/contact';
import React from 'react';

const App = () => {
  return (
  <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      </div>
  )
}

export default App;

