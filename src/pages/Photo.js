import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container,Typography,Grid } from "@material-ui/core";
import { useParams } from "react-router-dom";
import CardFoto from "../components/CardPhoto/CardPhoto";
const useStyles = makeStyles((theme)=>({
  root: {
    manWidth: 275,
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
  card: {
    margin: theme.spacing(2),
  },
}));
const Photo = () => {
  const classes = useStyles();
  const [usuario, setUsuario] = useState([]);
  const { id } = useParams();
  console.log(usuario)
  useEffect(() => {
    axios
      
      .get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
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
       Foto
        </Typography>
        <Grid container>
        {usuario.map((item) => (  
            <Grid item xs={12} md={4}>
      <CardFoto
        key={item.id}
        id={item.id}
        albumId={item.albumId}
        url={`${item.url}`}
        title={item.title}
        thumbnailUrl={item.thumbnailUrl}      
        
      />
      </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Photo;
