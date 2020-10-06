import React from 'react';
import './StockListTemplate.css';

const StockListTemplate = ({form, children}) => {

  return (
    <main className="stock-list-template">
        <section className="form-wrapper">{form}</section>
        <section className="stocks-wrapper">{children}</section>
    </main>
  );
};

export default StockListTemplate;