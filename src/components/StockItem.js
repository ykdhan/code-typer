import React, { Component } from 'react';
import './StockItem.css';
import StockChart from './StockChart';

class StockItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
      const { text, checked, id, onToggle, onRemove, series } = this.props;
  
      return (
        <div className="stock">
          <div className="stock-item animated fadeIn" onClick={() => onToggle(id)}>
              
              <div className={`stock-text ${checked && 'checked'}`}>
                  <div>{text}</div>
                  {checked ? <StockChart series={series}/> : ''}
              </div>

              <div className="remove" onClick={(e) => { e.stopPropagation(); onRemove(id); }}>&times;</div>
          </div>
        </div>
      );
    }
  }
  
  export default StockItem;