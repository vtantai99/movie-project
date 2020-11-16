import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import "./index.scss";

const useStyles = makeStyles((theme) => ({
  sideBar: {
    boxShadow: theme.shadows[20],
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 600,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <div className={`${classes.sideBar} bookingSideBar`}>
      <List className={classes.root} subheader={<li />}></List>
    </div>
  );
}
