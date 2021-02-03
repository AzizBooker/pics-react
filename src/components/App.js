import React from "react";
import axios from 'axios'
import SearchBar from "./SearchBar";

class App extends React.Component {

  onSearchSubmit(term){
    if(term.length>0){
      axios.get('https://api.unsplash.com/search/photos',{
        params: {query: term},
        headers: {
          Authorization: 'Client-ID o2mONPajVoMOYXVFST-SpJdgOM1csurSpKjOY5ywyI4'
        }
      })
    }else{
      console.log("Empty String")
    }


  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
