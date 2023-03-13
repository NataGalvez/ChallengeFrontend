import { styled, Button, ButtonProps, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";

export const FormControlStyle = styled(FormControl)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));
export const ButtonStyle = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#458ef7",
  marginLeft: "7px",
  "&:hover": {
    backgroundColor: "#3672cb",
  },
}));
export const TextFieldStyle = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#cccccc",
    },
    "&:hover fieldset": {
      borderColor: "#cccccc",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});
