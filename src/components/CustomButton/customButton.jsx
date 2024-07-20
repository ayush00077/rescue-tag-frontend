import React from "react";

import { Button } from "@mui/material";
import withStyles from "@mui/material";
import style from "./customButton.module.css";
// Custom styles for the button
const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
});

// Custom Button component
const CustomButton = ({ classes, color, backgroundColor, style ,children, ...props}) => (
  <Button
    className={style.button}
    {...props}
    style={{
      backgroundColor: "#3c50e0", 
      color:"#ffff",
      ...(color && { backgroundColor: backgroundColor }),
      ...style 
    }}
  >
    {children}
  </Button>
);

export default CustomButton;
