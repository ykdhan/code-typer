import React, { Component } from 'react';
import StockItem from './StockItem';

class StockItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <StockItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
    
        return (
            <div>
                {todoList}    
            </div>
        );
    }
}

export default StockItemList;