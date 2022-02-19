import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </div>
    );
  }
}

export default App;

// npm test 03.Title
