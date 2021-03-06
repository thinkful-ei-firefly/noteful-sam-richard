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
    notes: [],
    loading: true
  };
  
  componentDidMount() {
    fetch('http://localhost:9090/db')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          folders: resJson.folders,
          notes: resJson.notes,
          loading: false
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
    const { folders, notes, loading } = this.state;
    if (loading) return <div>loading</div>
    return (
      <div className="App">
        <Header />
        <div className="sidebar">
        <UserContext.Provider value ={{
          folders: folders,
          notes: notes,
        }}>
          <Switch>
            <Route
              exact
              path="/notes/:noteId"
              render={({ match }) => (
                  <NoteSidebar match={match}/>
              )}
            />
            <Route
              render={() => (
                  <FolderList />
              )}
            />
          </Switch>
        </UserContext.Provider>
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
