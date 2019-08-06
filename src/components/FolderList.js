import React from "react";
import Folder from "./Folder";

const FolderList = props => {
  return (
    <ul className="folder-list">
      {props.folders.map(folder => (
        <Folder name={folder.name} id={folder.id} key={folder.id} />
      ))}
    </ul>
  );
};

export default FolderList;
