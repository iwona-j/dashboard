import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Header from './layout/Header';
import Home from './components/Home';
import Footer from './layout/Footer';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
