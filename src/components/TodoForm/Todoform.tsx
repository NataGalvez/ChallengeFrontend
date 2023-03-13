import React, { useEffect, useState } from "react";
// import { useCreateTodoMutation } from "../../apiSlice";
import {
  ButtonStyle,
  FormControlStyle,
  TextFieldStyle,
} from "./TodoForm.styled";

function TodoForm() {
  // const [createTodo] = useCreateTodoMutation();
  const [valueTodo, setValueTodo] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTodo(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   createTodo({
  //     id: 1,
  //     name: valueTodo,
  //   });
  //   console.log();
  // }, [valueTodo]);
  return (
    <form onSubmit={handleSubmit}>
      <FormControlStyle>
        <TextFieldStyle
          id="outlined-adornment-weight"
          aria-describedby="outlined-weight-helper-text"
          placeholder="Enter new to do"
          name="todo"
          onChange={handleChange}
          value={valueTodo}
        />
        <ButtonStyle variant="contained" type="submit">
          ADD TO DO
        </ButtonStyle>
      </FormControlStyle>
    </form>
  );
}
export default TodoForm;
