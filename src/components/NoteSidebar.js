import React from "react";
import { Link } from "react-router-dom";
import UserContext from './UserContext'

class NoteSidebar extends React.Component {
  static contextType = UserContext;
  note = this.context.notes.find(note => note.id === this.context.match.params.noteId);
  folder = this.context.folders.find(folder => folder.id === this.note.folderId);
  render() {
    return (
      <div>
        <Link to={`/folders/${this.folder.id}`}>Go Back</Link>
        <h2>{this.folder.name}</h2>
      </div>
    )
  }
}

export default NoteSidebar;
