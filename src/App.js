import React, { Component } from 'react';
import StockListTemplate from './components/StockListTemplate';
import Form from './components/Form';
import StockItemList from './components/StockItemList';
import axios from 'axios';


class App extends Component {

  title = 'Code Typer';

  id = 1;

  state = {
    input: '',
    stocks: []
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, stocks } = this.state;

    axios.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+input+"&interval=5min&apikey=B0FMW70DUVTCNFDP")
    .then(res => {
      //console.log(res.data);
      
      var imported = [
        [ 'Time', 'Open', 'Close']
      ];

      var keys = Object.keys(res.data["Time Series (5min)"]);

      for(var okay = 0; okay < keys.length; okay++) {
        var item = res.data["Time Series (5min)"][keys[okay]];
        imported.push([ keys[okay].split(" ")[1], parseFloat(item['1. open']), parseFloat(item['4. close']) ]);
      }

      this.setState({
        input: '',
        stocks: stocks.concat({
          id: this.id++,
          text: input.toUpperCase(),
          checked: false,
          series: imported
        })
      });

      console.log(this.state.stocks);
    })
    .catch(error => console.log(error))

    
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { stocks } = this.state;

    const index = stocks.findIndex(stock => stock.id === id);
    const selected = stocks[index];
    const nextStocks = [...stocks];

    nextStocks[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      stocks: nextStocks
    });
  }

  handleRemove = (id) => {
    const { stocks } = this.state;
    this.setState({
      stocks: stocks.filter(stock => stock.id !== id)
    });
  }

  render() {
    const { input, stocks } = this.state;
    const { handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove } = this;

    return (
      <StockListTemplate form={(
        <Form 
          value={input}
          onKeyDown={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}
      >
        <StockItemList stocks={stocks} onToggle={handleToggle} onRemove={handleRemove}/>
      </StockListTemplate>
    );
  }
}

export default App;