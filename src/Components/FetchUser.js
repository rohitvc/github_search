import React, { Component } from "react";
import axios from "axios";
import GetData from "./GetData";

class FetchUser extends Component {
  state = {
    value: "",
    data: "",
    repodata: ""
  };

  componentDidMount() {
    if (this.props.value !== "") {
      this.fetchuser();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.value !== this.props.value && this.props.value !== "") {
      this.fetchuser();
    }
  }

  fetchuser = () => {
    axios
      .get(`https://api.github.com/users/${this.props.value}`)
      .then(response => this.setState({ data: response.data }))
      .catch(e => console.log(e));

    axios
      .get(`https://api.github.com/users/${this.props.value}/repos`)
      .then(response => this.setState({ repodata: response.data }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div>
        {this.state.data !== "" && this.state.repodata !== "" ? (
          <GetData
            value={this.props.value}
            data={this.state.data}
            repodata={this.state.repodata}
          />
        ) : null}
      </div>
    );
  }
}

export default FetchUser;
