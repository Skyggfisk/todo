import * as React from "react";
import "./App.css";

import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";
import { TodoInterface } from "./interfaces";

const App = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.push(todo);

    setTodos(newTodosState);
  }

  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find((todo: TodoInterface) => todo.id === id)!.text =
      event.target.value;

    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );

    setTodos(newTodosState);
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    setTodos(newTodosState);
  }

  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  }

  return (
    <div className="app">
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
      <TodoList
        todos={todos}
        handleTodoBlur={handleTodoBlur}
        handleTodoComplete={handleTodoComplete}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
      />
    </div>
  );
};

export default App;
