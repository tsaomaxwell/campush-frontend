import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    query: "",
  };
  _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.props.history.push(`search/clubs?category=${this.state.query}`);
    }
  };
  queryChange = (evt) => {
    this.setState({ query: evt.target.value });
  };
  render() {
    return (
      <input
        type="text"
        placeholder="search"
        className="col-xl-6 form-control"
        onKeyDown={this._handleKeyDown}
        value={this.state.query}
        onChange={this.queryChange}
      />
    );
  }
}

export default withRouter(Search);
