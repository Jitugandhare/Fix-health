import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookNow from './components/Booknow';
import MeetNow from './components/Meetnow';

function App() {
  const isOpen = true; // Set isOpen to true for demonstration
  const onClose = () => {closed}; // Define an empty function for onClose

  return (
    <div className="App">
      <Navbar/>
      {/* <Footer/> */}
      {/* <BookNow isOpen={isOpen} onClose={onClose}/> */}
      <MeetNow/>
    </div>
  );
}

export default App;
