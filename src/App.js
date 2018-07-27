import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './home/NavBar.js';
import Header from './home/Header.js';
import MainContent from './home/MainContent.js';
import Footer from './home/Footer.js';




class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
