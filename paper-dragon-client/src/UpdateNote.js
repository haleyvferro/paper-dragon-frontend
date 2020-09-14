import React, { Component } from "react";
// import { Container, Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { updateNote } from "./actions/index";

class UpdateNote extends Component {
  state = { id: "", title: "", copy: ""};

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const id = parseInt(path[path.length - 1]);
    this.setInitialState(id);
    // console.log(id)
  }

  setInitialState = (id) => {
    fetch(`http://localhost:3002/notes/${id}`)
    .then(resp => resp.json())
    .then(data => {
        this.setState({ id: data.id, title: data.title, copy: data.copy})
    })
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state)
  };
  
  submitHandler = (event) => {
    event.preventDefault();
    const noteObj = {
        id: this.state.id,
        title: this.state.title,
        copy: this.state.copy,
        user_id: 6
      }
    console.log('this is the state and noteObj', this.state, noteObj)
    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({note: 
        {id: this.state.id,
        title: this.state.title,
        copy: this.state.copy,
        user_id: 6}}),
    };
    // console.log(reqObj)
    fetch(
      `http://localhost:3002/notes/${this.state.id}`,
      reqObj
    )
    .then(resp => resp.json())
    .then(data => {
        // console.log('this is the response data', data)
        this.props.updateNote(data)
        this.setState({
            id: "", title: "", copy: ""
        })
    })
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler} className="ui form">
        <h1>Edit your note</h1>
            Title:
            <input
              placeholder="Title"
              name="title"
              onChange={this.changeHandler}
              value={this.state.title}
            />
            Note: <textarea
            label="copy"
            name="copy"
            placeholder="copy"
            onChange={this.changeHandler}
            value={this.state.copy}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const setStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

const mapDispatchToProps = {
  updateNote,
};

export default connect(setStateToProps, mapDispatchToProps)(UpdateNote);