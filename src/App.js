import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import NotePage from "./components/NotePage";

import "./App.css";

class App extends Component {
  state = {
    folders: this.props.store.folders,
    notes: this.props.store.notes
  };

  render() {
    const { folders, notes } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="sidebar">
          <Route exact path="/notes/:noteId" />
          <Route
            render={props => <FolderList folders={folders} {...props} />}
          />
        </div>
        <div className="main">
          <Switch>
            <Route
              exact
              path="/"
              render={props => <NoteList {...props} notes={notes} />}
            />
            <Route
              exact
              path="/folders/:folderId"
              render={props => <NoteList {...props} notes={notes} />}
            />
            <Route
              exact
              path="/notes/:notesId"
              render={props => <NotePage {...props} notes={notes} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
