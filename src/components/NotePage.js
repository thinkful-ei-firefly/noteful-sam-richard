import React from "react";
import Note from "./Note";

const NotePage = props => {
  const noteArr = props.notes.filter(
    note => note.id === props.match.params.notesId
  );
  const note = noteArr[0];
  console.log(note);
  return (
    <div>
      <Note {...note} />
      <p>{note.content}</p>
    </div>
  );
};

export default NotePage;
