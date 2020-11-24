import React from "react";

type TodoListProps = {
  todos: any[];
};

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className="todo">
            <label>
              <input type="checkbox" />
              <span></span>
              <i>delete</i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
