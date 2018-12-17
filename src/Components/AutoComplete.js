import React, { Component } from "react";
import AsyncSelect from "react-select/lib/Async";
import { withRouter } from "react-router-dom";
import axios from "axios";

var options = [
  { value: "microsoft", label: "Microsoft" },
  { value: "kamranahmedse", label: "Kamran Ahmed" },
  { value: "gaearon", label: "Dan Abramov" },
  { value: "rohitvc", label: "Rohit Chavan" },
  { value: "ajay28kumar", label: "Ajay Kumar" },
  { value: "trekhleb", label: "Oleksii Trekhleb" }
];

class AutoComplete extends Component {
  state = {
    value: ""
  };

  fetchUsers = async inputValue => {
    return await axios
      .get(
        `https://api.github.com/search/users?q=${inputValue}&auth_token=c9ac07604fd7fe782f430d68c7de0c1b4c909d8a`
      )
      .then(response => {
        var options = [];
        response.data.items.map(user => {
          var newUser = {};
          newUser.value = user.login;
          newUser.label = user.login;
          options.push(newUser);
          return 0;
        });
        return options;
      })
      .catch(error => console.log(error));
  };

  promiseOptions = inputValue =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(this.fetchUsers(inputValue));
      }, 1000);
    });

  onChanged = value => {
    this.props.history.push(`/${value}`);
  };

  render() {
    return (
      <>
        <AsyncSelect
          placeholder="Start searching..."
          cacheOptions
          defaultOptions={options}
          valueKey="value"
          labelKey="label"
          loadOptions={this.promiseOptions}
          onChange={value => {
            this.setState({ value: value.value });
            this.props.getValue(value.value);
            this.onChanged(value.value);
          }}
        />
      </>
    );
  }
}

export default withRouter(AutoComplete);
