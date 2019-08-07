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
    folders: [],
    notes: []
  };
  
  componentDidMount() {
    fetch('http://localhost:9090/db')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          folders: resJson.folders,
          notes: resJson.notes
        })
      });
  }

  handleDelete = (id) => {
    console.log('deleting '+id)
    fetch(`http://localhost:9090/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(() => {
        this.setState({
          notes: this.state.notes.filter(note => note.id !== id)
        })
      })
  }
  

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
              render={({match}) =>
                <UserContext.Provider value ={{
                  notes: notes,
                  match: match,
                  handleDelete: this.handleDelete
                }}> 
                  <NoteList />
                </UserContext.Provider>
              }  
            />
            <Route
              exact
              path="/folders/:folderId"
              render={({match}) => 
                <UserContext.Provider value ={{
                  notes: notes,
                  match: match,
                  handleDelete: this.handleDelete
                }}> 
                  <NoteList />
                </UserContext.Provider>
              }
            />
            <Route
              exact
              path="/notes/:notesId"
              render={({match}) => 
                <UserContext.Provider value ={{
                  notes: notes,
                  match: match,
                  handleDelete: this.handleDelete
                }}> 
                  <NotePage />
                </UserContext.Provider>
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
