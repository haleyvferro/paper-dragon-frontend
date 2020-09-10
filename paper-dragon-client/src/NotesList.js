import React, { Component } from 'react';
import { fetchNotesSuccess } from './actions/index'
import {connect} from 'react-redux'


class NotesList extends Component {
  render(){
    console.log(this.props)
  return (
    'hi'
  );}
}

const readAccess = (Storestate) => {

}

export default connect()(NotesList)
