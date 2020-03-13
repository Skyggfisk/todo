import React, { FC, ChangeEvent } from "react";
import { TodoInterface } from "../interfaces";
import styled, { css } from "styled-components";

export interface TodoItemProps {
  handleTodoUpdate: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
}

export const TodoItem: FC<TodoItemProps> = props => {
  return (
    <ListItem>
      <TodoItemInput
        isComplete={props.todo.isCompleted}
        value={props.todo.text}
        onBlur={props.handleTodoBlur}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          props.handleTodoUpdate(event, props.todo.id)
        }
      />

      <Controls>
        <Checkmark onClick={() => props.handleTodoComplete(props.todo.id)}>
          ✔
        </Checkmark>

        <ItemRemove onClick={() => props.handleTodoRemove(props.todo.id)}>
          ⨯
        </ItemRemove>
      </Controls>
    </ListItem>
  );
};

const ListItem = styled.li`
  background-color: #181c22;
  margin: 5px;
  padding: 3px;
  float: left;
`;

const TodoItemInput = styled.input<{ isComplete: boolean }>`
  background-color: #181c22;
  border: none;
  color: white;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${props => props.isComplete && `text-decoration: line-through;`}
`;

const Controls = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const ButtonStyles = css`
  text-align: center;
  user-select: none;
  border: none;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

// TODO: Should be buttons
const Checkmark = styled.button`
  ${ButtonStyles};
  background-color: #41e17e;
`;

const ItemRemove = styled.button`
  ${ButtonStyles};
  background-color: #e14141;
`;
