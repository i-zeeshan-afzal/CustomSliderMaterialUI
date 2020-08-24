import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  },
  label: {
    fontFamily: '"Montserrat", "Odoo Unicode Support Noto", sans-serif',
    fontWeight: "normal",
    lineHeight: 1.5
  }
}));

const PreetySlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

export default function CustomizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <Typography className={classes.label} gutterBottom>
        pretto.fr
      </Typography>
      <PreetySlider
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
        onChange={(e, newValue) => {
          console.log(newValue);
        }}
        defaultValue={20}
      />
    </div>
  );
}
