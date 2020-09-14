import './App.css';
import React, { Component } from 'react';
// import NoteContainer from './NoteContainer';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'

class App extends Component {
  render(){
  return (
    <div>
    <Navigation />
      <div className="ui container">
        <Route path='/notes/new' component={NoteForm} /><br/><br/>
        <Route path='/' component={NotesList} />
      </div>
    </div>
  );}
}

export default App;
