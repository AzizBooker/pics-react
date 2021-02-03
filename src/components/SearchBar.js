import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Arrow function automaticlly make sure value of this is always equal to instance of searchbar
  onFormSubmit=(event)=>{
    //Prevents form defautl action
    event.preventDefault();

    //When users submits form onSubmit is called from App.js
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Image Search"
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
