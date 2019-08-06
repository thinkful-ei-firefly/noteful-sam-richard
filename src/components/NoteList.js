import React from "react";
import Note from "./Note";
import "./note-list.css";

const NoteList = props => {
  let notes;
  if (props.match.params.folderId) {
    notes = props.notes.filter(
      note => note.folderId === props.match.params.folderId
    );
  } else {
    notes = props.notes;
  }

  return (
    <ul>
      {notes.map(note => (
        <Note
          name={note.name}
          id={note.id}
          key={note.id}
          modified={note.modified}
        />
      ))}
    </ul>
  );
};

export default NoteList;
