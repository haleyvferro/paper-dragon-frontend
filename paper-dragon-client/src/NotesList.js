import React, { Component } from 'react';
import { fetchNotesSuccess } from './actions/index';
import { deleteNote } from './actions/index';
import {connect} from 'react-redux'
import Note from './Note'


class NotesList extends Component {

  componentDidMount(){
    fetch('http://localhost:3002/notes')
    .then(resp => resp.json())
    .then(notesArr => {

    this.props.fetchNotesSuccess(notesArr)
    })
  }

  renderNotes = () => {
    return this.props.notes.map(note => (
      <Note
        key={note.id}
        note={note}
        deleteNote={this.props.deleteNote}
      />
    ));
  }
  

  render(){
  return (
    <div>
        <h1>buncha notes</h1>
        <div className="ui items">{this.renderNotes()}</div>
    </div>
  );}
}

const mapStateToProps= (storeState) => {
  return {
    notes: storeState.notes,
  }
}

const mapDispatchToProps = {
  fetchNotesSuccess,
  deleteNote,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)
