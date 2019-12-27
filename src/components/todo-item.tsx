import * as React from "react";
import { TodoItemInterface } from "./../interfaces";

// TodoItem component
const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo-item">
      <div className="todo-item-input-wrapper">
        <input
          className={props.todo.isCompleted ? "todo-item-done" : ""}
          value={props.todo.text}
          onBlur={props.handleTodoBlur}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            props.handleTodoUpdate(event, props.todo.id)
          }
        />
      </div>

      <div className="options">
        <div
          className="checkmark"
          onClick={() => props.handleTodoComplete(props.todo.id)}
        >
          <span className="todo-item-checked">✔</span>
        </div>

        <div
          className="item-remove"
          onClick={() => props.handleTodoRemove(props.todo.id)}
        >
          ⨯
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
