import React from 'react'
import {Container, Typography, makeStyles} from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
   title:{
margin:'50px auto',
color:'#fff',
borderBottom:'1px solid #fff',
  },
}));

export default function Erro() {
  const classes = useStyles();
  return (
    <Container>
      
      <Typography
          className={classes.title}
          color="textSecondary"
       variant="h2"
        align="center"
        >
        Página não encontrada
        </Typography>
    </Container>
  )
}
