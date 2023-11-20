import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro';
import Skills from './components/Skills/skills'
import React from 'react';

const App = () => {
  return (
  <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      </div>
  )
}

export default App;

