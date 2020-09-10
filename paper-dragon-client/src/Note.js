import React from 'react';

const Note = props => {
  return (
    <div className="item">
      <div className="middle aligned content">
        <div className="header">{`${props.note.title}`}</div>
        <div className="description">
            {`${props.note.copy}`}
        </div>
        {/* <div onClick={props.handleDelete} className="ui red basic button">
          Delete It
        </div> */}
      </div>
    </div>
  );
};
export default Note;