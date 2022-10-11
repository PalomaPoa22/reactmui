import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardActions from "@material-ui/core/CardActions";

import classNames from "classnames";
import { Container } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  btn: {
    margin: "0px auto",
    textAlign: "center",
  },
  avatar: {
    backgroundColor: "#d81b60",
  },
});

export default function CardAlbums({ userId, id, title, className }) {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {userId}
            </Avatar>
          }
          title={`${id} - ${title}`}
        />

        <CardActions>
          <Link to={`/details/${userId}`} className={classes.btn}>
           
            <ArrowBackIcon color="secondary" />
          </Link>
          <Link to={`photo/${userId}`} className={classes.btn}>
            
            <AddCircleIcon color="secondary" />
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
