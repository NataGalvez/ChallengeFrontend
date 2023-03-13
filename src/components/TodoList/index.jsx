import React, { useEffect, useState } from "react";
import "./styles.css";
import TodoListItem from "../TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodos,
  loadTodos,
  getTodos,
  updateTodos,
  closeSnackBar,
} from "../../store/actions";
import Snackbar from "@mui/material/Snackbar";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, snackBar } = useSelector((state) => state.data);

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    let newTodos = [...todos];
    let todo = newTodos.find((todo) => todo.id === todoId);
    dispatch(updateTodos(todoId));
    if (todoId <= 5) {
      todo.checked = !isChecked;
    }
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    dispatch(deleteTodos(todoId));
    if (todoId <= 5) {
      dispatch(getTodos(todos.filter((todo) => todo.id !== todoId)));
    }
  };
  const handleClose = () => {
    dispatch(closeSnackBar());
    let newTodos = [...todos];
    let todo = newTodos.find((todo) => todo.checked || !todo.checked);
    todo.checked = false;
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos &&
        todos.map((todo) => {
          return (
            <div className="todo-list-content" key={todo.id}>
              <TodoListItem
                label={todo.label}
                onDelete={() => handleDelete(todo.id)}
                checked={todo.checked}
                onCheck={() => toggleCheck(todo.id, todo.checked)}
              />
            </div>
          );
        })}
      {!todos.length && (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBar}
        onClose={() => handleClose()}
        message="Error, no puede manipular información que no se encuentre en la API."
      />
    </div>
  );
};

export default TodoList;
