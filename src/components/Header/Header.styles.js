import {  makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link:{
      color:'#fff',
      margin:5,
      textDecoration:'none',
    },
  }));

  export default useStyles