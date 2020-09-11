import React from 'react';

const Note = props => {
  return (
    <div className="item">
      <div className="middle aligned content">
        <div className="header">{`${props.note.title}`}</div>
        <div className="description">
            {`${props.note.copy}`}
        </div>
        <div onClick={null} className="ui basic button">
          Edit Note
        </div>
        <div onClick={null} className="ui basic button">
          Delete Note
        </div>
      </div>
    </div>
  );
};
export default Note;