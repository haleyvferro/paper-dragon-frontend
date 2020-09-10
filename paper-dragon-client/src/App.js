import './App.css';
import React, { Component } from 'react';
// import NoteContainer from './NoteContainer';
import NotesList from './NotesList';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'

class App extends Component {
  render(){
  return (
    <div>
      <Navigation />
      <Route path='/' component={NotesList} />
    </div>
  );}
}

export default App;
