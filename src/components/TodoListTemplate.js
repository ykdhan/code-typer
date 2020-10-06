import React from 'react';
import './TodoListTemplate.css';

const TodoListTemplate = ({form, children, chartData}) => {

  return (
    <main className="todo-list-template">
        <section className="form-wrapper">{form}</section>
        <section className="todos-wrapper">{children}</section>
        <section className="todos-wrapper">{chartData}</section>
    </main>
  );
};

export default TodoListTemplate;