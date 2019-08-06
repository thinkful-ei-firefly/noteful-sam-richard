import React from "react";
import { Link } from "react-router-dom";
import "./note.css";

const Note = props => {
  const date = new Date(props.modified).toLocaleDateString();
  return (
    <li className="note-list-item">
      <h3>
        <Link className="note-list-item__link" to={`/notes/${props.id}`}>
          {props.name}
        </Link>
      </h3>
      <div>Date modified: {date}</div>
    </li>
  );
};

export default Note;
