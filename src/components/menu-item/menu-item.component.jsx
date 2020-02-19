import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./menu-item.style.scss";

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  content: {
    width: "fit-content",
    height: "90px",
    padding: "0 25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #212121",
    borderRadius: "5px",
    backgroundColor: "#fff",
    opacity: "0.7",
    position: "absolute"
  },
  itemTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#4a4a4a"
  },
  itemSubtitle: {
    fontSize: "16px"
  }
}));

const BgImage = styled.div`
  background-image: ${props => (props.img ? `url(${props.img})` : null)};
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const MenuItem = ({
  lg,
  md,
  xs,
  title,
  linkUrl,
  imageUrl,
  size,
  history,
  match
}) => {
  const classes = useStyles();

  return (
    <Grid item lg={size ? 6 : lg} md={md} xs={xs} className={classes.root}>
      <Paper
        className={classes.paper + " mennu-item-paper"}
        style={{
          height: `${size ? "380px" : "240px"}`
        }}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <BgImage className="background-image" img={imageUrl} />
        <Box className={classes.content + " content"}>
          <Typography variant="h1" className={classes.itemTitle}>
            {title.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1" className={classes.itemSubtitle}>
            SHOP NOW
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default withRouter(MenuItem);
