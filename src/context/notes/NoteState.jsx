import NoteContext from "./NoteContext";

import React, { Component } from "react";

export default class NoteState extends Component {
  state = {
    name: "Avijit",
  };
    render() {
      const {name}=this.state
      return (<div>
          <NoteContext.Provider value={{name}}>
              {this.props.children}
        </NoteContext.Provider>
    </div>);
  }
}
