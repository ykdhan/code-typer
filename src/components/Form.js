import React from 'react';
import './Form.css';

const Form = ({value, onChange, onCreate, onKeyDown}) => {
    return (
      <div className="form">
        <input placeholder="검색..." value={value} onChange={onChange} onKeyDown={onKeyDown}/>
        <div className="create-button" onClick={onCreate}>🐓</div>
      </div>
    );
  };
  
  export default Form;