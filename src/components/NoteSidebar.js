import React from "react";
import { Link } from "react-router-dom";

const NoteSidebar = ({ match: { params }, folders, notes }) => {
  const note = notes.find(note => note.id === params.noteId);
  const folder = folders.find(folder => folder.id === note.folderId);
  return (
    <div>
      <Link to={`/folders/${folder.id}`}>Go Back</Link>
      <h2>{folder.name}</h2>
    </div>
  );
};

export default NoteSidebar;
