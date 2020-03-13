import React, { FC, ChangeEvent, useRef, useState, KeyboardEvent } from "react";
import shortid from "shortid";
import { TodoInterface } from "./../interfaces";
import styled from "styled-components";

interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

export const TodoForm: FC<TodoFormInterface> = (props: TodoFormInterface) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormState(event.target.value);
  }

  function handleInputEnter(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      };

      props.handleTodoCreate(newTodo);

      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }

  return (
    <FormWrapper>
      <FormInput
        ref={inputRef}
        type="text"
        placeholder="Enter new todo..."
        onChange={event => handleInputChange(event)}
        onKeyPress={event => handleInputEnter(event)}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  margin: auto;
  width: 173px;
`;

const FormInput = styled.input`
  background-color: #181c22;
  border: none;
  color: white;
  padding: 2px 5px;
`;
