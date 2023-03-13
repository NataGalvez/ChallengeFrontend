import React, { useEffect } from "react";
import "./styles.css";
import TodoListItem from "../TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodos,
  loadTodos,
  getTodos,
  updateTodos,
} from "../../store/actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.data);

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    let newTodos = [...todos];
    let todo = newTodos.find((todo) => todo.id === todoId);
    todo.checked = !isChecked;
    dispatch(updateTodos(todoId));
    console.log(todo);
  };

  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    dispatch(deleteTodos(todoId));
    dispatch(getTodos(todos.filter((todo) => todo.id !== todoId)));
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
      {!todos.lenght && (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};

export default TodoList;
