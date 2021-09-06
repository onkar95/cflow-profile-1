import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'100vh',
    flexDirection:'column',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    color:'yellow',
   
  },
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color='' />
    </div>
  );
}
