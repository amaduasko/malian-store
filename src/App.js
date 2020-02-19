import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import HomePage from './pages/Home/Home.page'
import './App.scss';

const useStyles = makeStyles(theme => ({
  AppContainer: {
    paddingTop: '20px'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Container className={classes.AppContainer}>
      <HomePage />
    </Container>
  );
}

export default App;
