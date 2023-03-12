import React from "react";
import "./styles.css";
import { useGetTodoQuery } from "../../slices/apiSlice";
import TodoListItem from "../TodoListItem";
const TodoList = () => {
  const { data: todo, isError, isLoading, isSuccess } = useGetTodoQuery();
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };
  console.log(todo);
  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {!isLoading &&
        isSuccess &&
        todo.map((element) => {
          return (
            <div className="todo-list-content">
              <TodoListItem label={element.label} />
            </div>
          );
        })}
      {!todo && (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};

export default TodoList;
