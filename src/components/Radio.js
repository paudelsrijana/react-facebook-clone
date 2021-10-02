import React from "react";
import { Box, Grid, makeStyles, Radio } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  genderItem: {
    padding: "3px",
    cursor: "pointer",
  },
  radioButton: {
    marginRight: "0",
  },
}));
export default function RadioComponent({ gender }) {
  const classes = useStyles();

  return (
    <Box className={classes.genderItem}>
      <Grid container item xs={4}>
        <Grid size="small">
          <Box component="p">
            {gender}
            <Radio color="primary" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
