import './App.css';
import React, { Component } from 'react';
// import NoteContainer from './NoteContainer';
import NotesList from './NotesList';
import NoteForm from './NoteForm';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation'
import UpdateNote from './UpdateNote'
import About from './About'
import Login from './Login'

class App extends Component {
  render(){
  return (
    <div>
    <Navigation />
      <div className="ui container">
        <Route path='/' component={About} /><br/><br/>
        <Route path="/login" component={Login} />
        <Route path="/notes/edit/:id" component={UpdateNote} />
        <Route path='/notes/new' component={NoteForm} /><br/><br/>
        <Route path='/notes' component={NotesList} />
      </div>
    </div>
  );}
}

export default App;
