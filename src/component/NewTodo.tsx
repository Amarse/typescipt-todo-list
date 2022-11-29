import React, { useRef, useContext } from 'react';
import styled from './newTodo.module.css';
import { TodosContext } from '../store/todos-context';


const NewTodo: React.FC = () => {

  const newTodosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;
    
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    newTodosCtx.addTodo(enteredText);
    
  };

  return (
    <form className={styled.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
