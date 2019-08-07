import React from "react";
import Folder from "./Folder";
import UserContext from "./UserContext"

class FolderList extends React.Component {
  static contextType = UserContext;
  render() {
    const { folders } =this.context;
    return (
      <ul className="folder-list">
        {folders.map(folder => (
          <Folder name={folder.name} id={folder.id} key={folder.id} />
        ))}
      </ul>
    );
  }
};

export default FolderList;
