import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";

import { TodoInterface } from "../interfaces";
import { TodoItem } from "./todo-item";

interface TodoListProps {
  handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
}

export const TodoList: FC<TodoListProps> = props => {
  const {
    todos,
    handleTodoBlur,
    handleTodoComplete,
    handleTodoRemove,
    handleTodoUpdate
  } = props;

  return (
    <ListWrapper>
      <List>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleTodoUpdate={handleTodoUpdate}
            handleTodoBlur={handleTodoBlur}
            handleTodoComplete={handleTodoComplete}
            handleTodoRemove={handleTodoRemove}
          />
        ))}
      </List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  margin: 0 auto;
  width: 50%;
  padding: 10px;
`;

const List = styled.ul`
  padding: 0px;
  list-style: none;
`;
