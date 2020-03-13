import React, { FC, ChangeEvent } from "react";
import styled from "styled-components";

import { TodoForm } from "./components/todo-form";
import { TodoList } from "./components/todo-list";
import { TodoInterface } from "./interfaces";

export const App: FC = () => {
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.push(todo);

    setTodos(newTodosState);
  }

  function handleTodoUpdate(event: ChangeEvent<HTMLInputElement>, id: string) {
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

  function handleTodoBlur(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  }

  return (
    <AppContainer>
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
      <TodoList
        todos={todos}
        handleTodoBlur={handleTodoBlur}
        handleTodoComplete={handleTodoComplete}
        handleTodoRemove={handleTodoRemove}
        handleTodoUpdate={handleTodoUpdate}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div``;
