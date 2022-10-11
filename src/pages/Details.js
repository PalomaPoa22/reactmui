import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container,Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import CardUsuario from "../components/CardDetails/CardUsuario";
const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 375,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title:{
    margin:theme.spacing(4),
    color:'#fff',
    borderBottom:'1px solid #fff',
      },
  pos: {
    marginBottom: 12,
  },
}));
const Details = () => {
  const classes = useStyles();
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  console.log(usuario)
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUsuario(response.data);
      });
  }, [id]);
  return (
    <Container>
       <Typography
          className={classes.title}
          color="textSecondary"
       variant="h2"
        align="center"
        >
        Detalhes Usuario
        </Typography>
      <CardUsuario
        key={usuario.id}
        id={usuario.id}
        name={usuario.name}
        email={usuario.email}
        username={usuario.username}
        phone={usuario.phone}
        website={usuario.website}
        // street={usuario.address.street}
        // suite={usuario.address.suite}
        // city={usuario.address.city}
        // zipcode={usuario.address.zipcode}
        // lat={usuario.address.geo.lat}
        // lng={usuario.address.geo.lng}
        // phone={usuario.phone}
        // website={usuario.website}
        // compName={usuario.company.name}
        // catchPhrase={usuario.company.phrase}
        // bs={usuario.company.bs}
      />
    </Container>
  );
};

export default Details;
