import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookNow from './components/Booknow';

function App() {
  const isOpen = true; // Set isOpen to true for demonstration
  const onClose = () => {}; // Define an empty function for onClose

  return (
    <div className="App">
      <Navbar/>
      {/* <Footer/> */}
      <BookNow isOpen={isOpen} onClose={onClose}/>
    </div>
  );
}

export default App;
