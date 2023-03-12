import {
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import {
  ButtonStyle,
  FormControlStyle,
  TextFieldStyle,
} from "./TodoForm.styled";

function TodoForm() {
  return (
    <FormControlStyle variant="outlined">
      <TextFieldStyle
        id="outlined-adornment-weight"
        aria-describedby="outlined-weight-helper-text"
        placeholder="Enter new to do"
      />
      <ButtonStyle variant="contained">ADD TO DO</ButtonStyle>
    </FormControlStyle>
  );
}
export default TodoForm;
