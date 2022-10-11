import { useState, useEffect } from "react";
import {Grid,Typography,Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CardShop from "../components/CardHome/CardHome";
import axios from "axios";

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

const User = () => {
  const classes = useStyles();
  const [usuario, setUsuario] = useState([]);
  console.log(usuario);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users/').then((response) => {
      setUsuario(response.data);
    });
  }, []);
  return (
    <Container>
      <Typography
          className={classes.title}
          color="textSecondary"
       variant="h2"
        align="center"
        >
        Lista de Usuarios
        </Typography>
      <Grid container>
      {usuario.map((item) => (
        <Grid item xs={12} md={4}>
          
          <CardShop
            id={item.id}
            name={item.name}           
            email={item.email} 
            className={classes.card}
          />
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default User;
