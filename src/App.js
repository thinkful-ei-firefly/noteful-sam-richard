import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FolderList from "./components/FolderList";
import NoteList from "./components/NoteList";
import NotePage from "./components/NotePage";
import NoteSidebar from "./components/NoteSidebar";
import UserContext from "./components/UserContext";

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
          <Switch>
            <Route
              exact
              path="/notes/:noteId"
              render={({ match }) => (
                <UserContext.Provider value ={{
                  folders: folders,
                  notes: notes,
                  match: match
                }}>
                  <NoteSidebar />
                </UserContext.Provider>
              )}
            />
            <Route
              render={() => (
                <UserContext.Provider value ={{
                  folders: folders
                }}>
                  <FolderList />
                </UserContext.Provider>
              )}
            />
          </Switch>
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
