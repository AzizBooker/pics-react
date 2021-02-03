import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(term) {
    if (term.length >= 2) {
      const response = await unsplash.get("/search/photos", {
        params: { query: term },
      });

      this.setState({ images: response.data.results });
    } else {
      console.log("Empty String");
    }
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(term) => this.onSearchSubmit(term)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
