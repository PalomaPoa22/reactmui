import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 375,
    margin: "40px auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  btn: {
    margin: "0px auto",
    textAlign: "center",
  },
}));
export default function CardUsuario({
  id,
  name,
  username,
  email,
  phone,
  website,
}) {
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
            <strong> Id : </strong> {id}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <strong> Nome : </strong> {name} {username}
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <strong>E-mail : </strong> {email}
          </Typography>

          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <strong>Telefone : </strong> {phone}
          </Typography>

          <Typography className={classes.pos} color="textSecondary">
            <strong> Site : </strong> {website}
          </Typography>
          {/* <Typography className={classes.pos} color="textSecondary">
          Site: {street} - {suite} - {city} - {zipcode}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Localizacao: {lat} - {lng}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Empresa : {compName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {phrase}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {bs}
        </Typography>
      */}
        </CardContent>
        <CardActions>
          <Link to="/" className={classes.btn}>
        
            <ArrowBackIcon color="secondary" />
          </Link>

          <Link to={`/details/${id}/albums`} className={classes.btn}>
            
            <AddCircleIcon color="secondary" />
          </Link>
        </CardActions>
      </Card>
    </Container>
  );
}
