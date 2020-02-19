import React from "react";
import { menuItems } from "../../constants/menuItems";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MenuItem from "../../components/menu-item/menu-item.component";

export default function MenuDirectory() {
  return (
    <Grid container spacing={3}>
      {menuItems.map(item => (
        <MenuItem key={item.id} lg={4} {...item} />
      ))}
    </Grid>
  );
}
