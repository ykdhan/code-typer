import React from 'react';
import './StockListTemplate.css';

const StockListTemplate = ({form, children}) => {

  return (
    <main className="todo-list-template">
        <section className="form-wrapper">{form}</section>
        <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default StockListTemplate;