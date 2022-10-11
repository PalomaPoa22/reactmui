import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActions from '@material-ui/core/CardActions';

import classNames from 'classnames'
import {Container} from '@material-ui/core'
import CardHeader from '@material-ui/core/CardHeader';
import { Link } from 'react-router-dom'; 
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) =>({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  btn:{
    textAlign:'center',
    margin:'0 auto',
  },avatar: {
    backgroundColor: '#d81b60',
  },
}));

export default function CardHome({ name,email,id,className}) {
  const classes = useStyles();

  return (
    <Container>
      <Card className={classNames(className,classes.root)}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {id}
          </Avatar>
        }
        
        title= {name}
        subheader={email}
      />
 
      <CardActions>
     
         <Link to={`/details/${id}`} className={classes.btn}> <AddCircleIcon color='secondary'/></Link>
       
      
      </CardActions>
    </Card>
    </Container>
  );
}
