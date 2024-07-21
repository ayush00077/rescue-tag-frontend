import { TextField } from "@mui/material";
import React from "react";

export default function InputText({
  key,
  placeholder,
  height,
  width,
  handelChange,
  multiline,
  maxRows,
  style,
  hyperText,
  disabled,
  name,
  value,
  error
}) {
  return (
    <TextField
      name={name}
      value={value}
      key={key}
      placeholder={placeholder}
      onChange={(e) => handelChange(e)}
      inputProps={{
        style: {
          paddingTop: "1px",
          paddingBottom: "1px",
          height: height,
          width: width,
          ...style,
        },
      }}
      
      disabled={disabled}
      multiline={multiline}
      rows={maxRows}
      error={error}
      helperText={error ? error : hyperText}
    />
  );
}
