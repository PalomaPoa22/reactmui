import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Container,Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import CardAlbums from "../components/CardAlbum/CardAlbums";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: theme.spacing(2),
  },
  title:{
    margin:theme.spacing(4),
    color:'#fff',
    borderBottom:'1px solid #fff',
      },
}));

const Albums = () => {
  const classes = useStyles();
  const [usuario, setUsuario] = useState([]);
  console.log(usuario);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}/albums`).then((response) => {
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
        Album
        </Typography>
      <Grid container>
      {usuario.map((item) => (
        <Grid item xs={12} md={4}>
         
          <CardAlbums
          key={item.id}
            id={item.id}
            title={item.title}           
            userId={item.userId}
            className={classes.card}
          />
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default Albums;
