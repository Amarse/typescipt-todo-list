import React from 'react';
import styled from './todoItem.module.css';

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void; }> = (props) => {
  return <li className={styled.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
