import * as React from "react";
import TodoItem from "./todo-item";
import { TodoListInterface } from "./../interfaces";

// TodoList component
const TodoList = (props: TodoListInterface) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoBlur={props.handleTodoBlur}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoRemove={props.handleTodoRemove}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
