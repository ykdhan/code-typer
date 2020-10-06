import React, { Component } from 'react';
import StockItem from './StockItem';

class StockItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.stocks !== nextProps.stocks;
    }

    render() {
        const { stocks, onToggle, onRemove } = this.props;

        const stockList = stocks.map(
            ({id, text, checked, series}) => (
                <StockItem
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                    series={series}
                />
            )
        );
    
        return (
            <div>
                {stockList}    
            </div>
        );
    }
}

export default StockItemList;