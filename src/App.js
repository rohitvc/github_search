import React, { Component } from "react";
import AutoComplete from "./Components/AutoComplete";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FetchUser from "./Components/FetchUser";

const styles = theme => ({
  root: {
    fontFamily: "Roboto, sans-serif",
    marginTop: 0,
    minHeight: "100vh",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#ff9d00",
    backgroundImage: `url(
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E"
    )`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    color: "#000"
  },
  headings: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    color: "#fff"
  }
});

class App extends Component {
  state = {
    value: "",
    user: []
  };

  getValue = value => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <h1 className={classes.headings}>
            Hello there! Welcome to Github Search {this.state.value}
          </h1>
          <AutoComplete getValue={this.getValue} name={this.state.value} />
          <h2 className={classes.headings}>
            Start typing to get Auto-Suggestions
          </h2>
          <Route
            path={`/${this.state.value}`}
            component={() => <FetchUser value={this.state.value} />}
          />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
