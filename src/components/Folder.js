import React from "react";
import {NavLink} from 'react-router-dom';

const Folder = (props) => {
  return <li><NavLink to={`/folders/${props.id}`}>{props.name}</NavLink></li>;
};

export default Folder;
