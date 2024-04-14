import React from "react";

import { Button } from "@mui/material";

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
const CustomButton = ({ classes, color, backgroundColor, children, ...props }) => (
  <Button
    className={classes?.root}
    {...props}
    style={{
      backgroundColor: "#3c50e0", 
      color:"#ffff",
      ...(color && { backgroundColor: backgroundColor }), 
    }}
  >
    {children}
  </Button>
);

export default CustomButton;
