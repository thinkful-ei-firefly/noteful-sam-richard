import React from "react";
import Note from "./Note";

const NotePage = (props) => {
  const note = props.notes.filter(note => note.id === props.match.params.notesid).join('');
  return (
    <div>
      <Note name={note.name} id={props.id} key={props.id} modified={props.modified}/>
      <p>{props.content}</p>
    </div>
  );
};

export default NotePage;
