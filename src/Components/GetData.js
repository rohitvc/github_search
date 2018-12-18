import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Chip,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Button
} from "@material-ui/core";
import StarICon from "@material-ui/icons/Star";
import PersonICon from "@material-ui/icons/Person";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10
  },
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      padding: "10 0"
    }
  },
  card: {
    minHeight: 300,
    textAlign: "center",
    margin: 10,
    boxShadow: "5px 5px 5px 0px rgba(204,204,204,0.75)"
  },
  grow: {
    flexGrow: 1
  },
  icon: {
    margin: 8,
    fontSize: "32",
    color: "rgb(247, 17, 98)"
  },
  chip: {
    margin: 8
  },
  avatar: {
    color: "#fff",
    backgroundColor: "rgb(197, 17, 98)"
  },
  avatarImg: {
    margin: 10,
    width: 60,
    height: 60
  },
  button: {
    textAlign: "center",
    margin: "0 auto",
    backgroundColor: "rgb(63, 81, 181)",
    color: "#fff"
  }
});

class ShowUser extends Component {
  render() {
    const { classes, data, repodata } = this.props;
    return (
      <>
        <AppBar position="static">
          <Toolbar className={classes.flex}>
            <Avatar
              src={data.avatar_url}
              className={classes.avatarImg}
              sizes="large"
            />
            <Chip
              label={data.name}
              className={classes.chip}
              variant="default"
              color="secondary"
            />
            <StarICon className={classes.icon} />
            <Typography variant="h4" color="inherit">
              {repodata.reduce((acc, curr) => acc + curr.stargazers_count, 0)}
            </Typography>
            <PersonICon className={classes.icon} />
            <Typography variant="headline" color="inherit">
              {data.name}
            </Typography>
            <Chip
              label="Repository Count"
              className={classes.chip}
              variant="default"
              color="secondary"
            />
            <Avatar className={`${classes.avatarImg} ${classes.avatar}`}>
              {data.public_repos}
            </Avatar>
          </Toolbar>
        </AppBar>

        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        <div className={classes.root}>
          <Grid container>
            {repodata.length >= 1 ? (
              repodata.map((repo, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card className={classes.card}>
                    <CardHeader
                      avatar={
                        <Avatar className={classes.avatar}>{index + 1}</Avatar>
                      }
                      title={
                        <Typography color="textPrimary" variant="headline">
                          {repo.name}
                        </Typography>
                      }
                      subheader={
                        <Typography color="primary" variant="h4">
                          <StarICon fontSize="large" color="secondary" /> :{" "}
                          {repo.stargazers_count}
                        </Typography>
                      }
                    />
                    <CardContent>
                      <Typography color="textSecondary" variant="button">
                        {repo.description ? repo.description : "No Description"}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        className={classes.button}
                        size="small"
                        href={repo.html_url}
                        target="_blank"
                      >
                        Repo Link
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <h1 style={{ textAlign: "center", margin: "0 auto" }}>
                No Respository Found
              </h1>
            )}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ShowUser);
