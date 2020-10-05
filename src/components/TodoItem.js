import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
      const { text, checked, id, onToggle, onRemove } = this.props;
  
      return (
        <div className="todo-item animated fadeIn" onClick={() => onToggle(id)}>
            <div className={`todo-check ${checked && 'checked'}`}>
                <div>✓</div>
            </div>
            
            <div className={`todo-text ${checked && 'checked'}`}>
                <div>{text}</div>
            </div>

            <div className="remove" onClick={(e) => { e.stopPropagation(); onRemove(id); }}>&times;</div>
        </div>
      );
    }
  }
  
  export default TodoItem;