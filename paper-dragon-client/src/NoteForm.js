import React, { Component } from 'react';

class NoteForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  };

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addNote(this.state.text)
    this.setState({
        title: '',
        copy: ''
    });
  }

  render() {
    return (
      <div>
        <h1>New Note</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)} className="ui form">
          Title: <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} /><br/><br/>
            Note: <textarea cols="50" rows="10"></textarea><br/><br/>
          <input className="ui button" type="submit" />
        </form>
      </div>
    );
  }
};

export default NoteForm;