import { Component } from "react";
import API from "../utils/api";

class Search extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchUsers("");
  };

  searchUsers = query => {
      API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    
     };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {

    return (
      <div>

      </div>
    );
  }
}

export default Search;
