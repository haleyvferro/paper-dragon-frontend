import './App.css';
import React, { Component } from 'react';
import NoteContainer from './NoteContainer';
import { Route, Switch } from 'react-router-dom';


class App extends Component {

  // const defaultState = {
  //   isCloudy: false
  // }

  // const reducer = (state=defaultState, action) => {
  //   console.log(state, 'state')
  //   console.log(action, 'action')
  //   return 'hello world'
  // }
  
  // const store = createStore(reducer);
  
  // debugger;
  render(){
  return (
    <div>
      'this is the app'
      <NoteContainer />
    </div>
  );}
}

export default App;
