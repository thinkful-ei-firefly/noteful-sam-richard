import React from "react";
import Note from "./Note";

const NoteList = (props) => {
  const notes = props.notes.filter(note => note.folderId === props.match.params.folderId)
  return (
    <ul>
      {notes.map(note => <Note name={note.name} id={note.id} key={note.id} modified={props.modified}/>)}
    </ul>
  );
};

export default NoteList;
