import React from 'react'
import {Link} from 'react-router-dom';

const Note = (props) => {
  return (
    <li>
      <Link to={`/notes/${props.id}`}>{props.name}</Link>
      <div>Date modified: {props.modified}</div>
    </li>
  )
}

export default Note
