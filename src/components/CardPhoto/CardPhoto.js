import { Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    margin: "30px auto",
    textAlign: "center",
  },
  btn: {
    margin: "0px auto",
    textAlign: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
  },
});
export default function CardPhoto({ albumId, id, title, url, thumbnailUrl }) {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <strong>Album : </strong> {albumId} <br />
            <strong>Id : </strong> {id} <br />
            <strong>title : </strong> {title}
          </Typography>
          <CardMedia
            className={classes.media}
            image={`${thumbnailUrl}`}
            title={title}
          />

          <img src={thumbnailUrl} alt="imagem" />
        </CardContent>
        <CardActions>
          <Link
            to={`/details/${albumId}/albums`}
           
            target="_blank"
            className={classes.btn}
          >
            {" "}
            <ArrowBackIcon color="secondary" />
          </Link>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.btn}
          >
            <AddCircleIcon color="secondary" />
          </a>
        </CardActions>
      </Card>
    </Container>
  );
}
