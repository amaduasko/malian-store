import React from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./pages/Home/Home.page";
import HatsPage from "./pages/Hats/Hats.page";
import ShopPage from "./pages/Shop/shop.page";
import "./App.scss";

const useStyles = makeStyles(theme => ({
  AppContainer: {
    paddingTop: "20px 60px"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Switch>
      <Container className={classes.AppContainer}>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Container>
    </Switch>
  );
}

export default App;
