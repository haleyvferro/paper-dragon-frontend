import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addNote } from './actions/index';


class NoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      copy: ''
    };
  };

  handleOnChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = (event) => { 
    event.preventDefault();
    console.log('hello')
    const noteObj = {
      title: this.state.title,
      copy: this.state.copy,
      user_id: 6
    }
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify (noteObj)
    }
    fetch('http://localhost:3002/notes', reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.addNote(data) 
      this.setState({
        title: '',
        copy: ''
    });
    })
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form onSubmit={this.handleOnSubmit} className="ui form">
          Title: <input
            name="title"
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} 
            /><br/><br/>
            Note: <textarea 
              onChange={(event) => this.handleOnChange(event)} 
              name="copy" 
              cols="50" 
              rows="10"
              ></textarea><br/><br/>
          <input className="ui button" type="submit" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = {
  addNote,
}

export default connect(null, mapDispatchToProps)(NoteForm)
