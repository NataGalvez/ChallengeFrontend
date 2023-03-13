import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodos, getTodos } from "../../store/actions";
import {
  ButtonStyle,
  FormControlStyle,
  TextFieldStyle,
} from "./TodoForm.styled";

function TodoForm() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state: any) => state.data);
  const [valueTodo, setValueTodo] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueTodo(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createTodos() as any);
    todos.push({ id: todos.length, label: valueTodo });
  };
  const disabledButton = !valueTodo.length;
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
        <ButtonStyle
          variant="contained"
          type="submit"
          disabled={disabledButton}
        >
          ADD TO DO
        </ButtonStyle>
      </FormControlStyle>
    </form>
  );
}
export default TodoForm;
