import { TextField } from "@mui/material";
import React from "react";

export default function InputText({
  key,
  placeHolder,
  height,
  width,
  setInput,
  multiline,
  maxRows,
  style
}) {
  return (
    <TextField
    id="outlined-textarea"
      key={key}
      placeholder={placeHolder}
      onChange={(e) => setInput(e.target.value)}
      inputProps={{
        style: {
          paddingTop: "1px",
          paddingBottom: "1px",
          height: height,
          width: width,
          ...style,
        },
      }}
      multiline={multiline}
      rows={maxRows}
    />
  );
}
