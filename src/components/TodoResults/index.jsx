import React, { useEffect, useState } from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
const TodoResults = () => {
  const { todos } = useSelector((state) => state.data);
  // Fix an ability to calculate completed tasks

  return (
    <div className="todo-results">
      Done:
      {
        todos
          .map((element) => element.checked)
          .filter((element) => element === true).length
      }
    </div>
  );
};

export default TodoResults;
