import React from "react";
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
    // axios
    //   .get(
    //     `https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000`
    //   )
    //   .then(res => {
    //     const fullData = res.data;
    //     const data = this.search(fullData);
    //     let keyword = this.state.input;
    //     if (data.length === 0) {
    //       // keyword not found
    //       this.setState({ notfound: true, keyword, loading: false });
    //     }
    //     this.setState({ data, loading: false });
    //   });
    setTimeout(() => {
      let data = {
        building_name: "CASA DEL GELATO",
        flat_number: "10",
        flat_number_suffix: "A",
        number_first: "24",
        number_last: "26",
        street_name: "HIGH STREET",
        street_type: "ROAD",
        locality_name: "MOUNT WAVERLEY",
        state: "VICTORIA",
        postcode: "3183"
      };
      this.setState({ data, loading: false });
    }, 2000);
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
