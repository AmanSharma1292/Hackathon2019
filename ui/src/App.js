import React from "react";
import axios from "axios";
import "./App.css";
import search from "./search.svg";
import Table from "./components/Table";

class App extends React.Component {
  state = {
    input: "",
    data: "",
    notfound: false,
    keyword: "",
    loading: false
  };

  /* API call */
  searchQuery = e => {
    e.preventDefault();
    this.setState({ notfound: false, loading: true });
    axios
      .get(
        `/api/${this.state.input}`
      )
      .then(res => {
        const fullData = res.data;
        if (data.length === 0) {
          // keyword not found
          this.setState({ notfound: true, loading: false });
        }
        this.setState({ data, loading: false });
      });
  };

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h1>Bro-Code</h1>
        <form className="search-container" onSubmit={this.searchQuery}>
          <input
            className="search-input"
            type="text"
            value={this.state.input}
            onChange={e => {
              this.setState({ input: e.target.value });
              if (e.target.value === "") {
                this.setState({ data: [], notfound: false, keyword: "" });
              }
            }}
          />
          <button className="search-button" type="submit">
            <img src={search} alt="Search Logo" className="search" />
          </button>
        </form>
        {this.state.loading ? (
          <p style={{ margin: "10px" }}>Loading...</p>
        ) : this.state.data ? (
          <Table data={this.state.data} />
        ) : (
          undefined
        )}
      </div>
    );
  }
}

export default App;
