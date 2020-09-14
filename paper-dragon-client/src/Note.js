import React, {Component} from 'react';

class Note extends Component {

  handleDelete() {
    const id = this.props.note.id
    // console.log(id)
    const reqObj = {
      method: 'DELETE'
    }
    fetch(`http://localhost:3002/notes/${id}`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      this.props.deleteNote(id)
    })
  }

render () {
  return (
    <div className="ui item">
      <div>
        <div className="ui dividing header">{`${this.props.note.title}`}</div>
        <p>
            {`${this.props.note.copy}`}
        </p>
        <div onClick={null} className="ui button">
          Edit Note
        </div>
        <div id={this.props.note.id} onClick={() => this.handleDelete()} className="ui button">
          Delete Note
        </div> <br/><br/><br/>
      </div>
    </div>
  );
};}
export default Note;