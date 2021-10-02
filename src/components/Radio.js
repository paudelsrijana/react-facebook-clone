import React from "react";
import { Box, Grid, makeStyles, Radio } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  transmissionType: {
    display: "flex",
    flexDirection: "row",
  },
  genderItem: {
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: "5%",
    padding: "6px",
    marginTop: "10px",
    cursor: "pointer",
    width: 170,
  },
  radioButton: {
    marginRight: "0",
  },
}));
export default function RadioComponent({ gender }) {
  const classes = useStyles();

  return (
    <Box className={classes.genderItem}>
      <Grid container>
        <Grid>
          <Box component="p" mt="5px">
            {gender}
          </Box>
        </Grid>
        <Grid className={classes.radioButton}>
          <Radio color="primary" />
        </Grid>
      </Grid>
    </Box>
  );
}
