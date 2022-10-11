import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import useStyles from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" align="center" className={classes.title}>
            React Mode On
          </Typography>

          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/details/2" className={classes.link}>
            Detalhes
          </Link>
          <Link to="details/2/albums/photo/12" className={classes.link}>
            Fotos
          </Link>
          <Link to="/details/2/albums" className={classes.link}>
            Albums
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
