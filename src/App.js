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
    todos: []
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;

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
        todos: todos.concat({
          id: this.id++,
          text: input.toUpperCase(),
          checked: false,
          series: imported
        })
      });

      console.log(this.state.todos);
    })
    .catch(error => console.log(error))

    
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextStocks = [...todos];

    nextStocks[index] = { 
      ...selected, 
      checked: !selected.checked
    };

    this.setState({
      todos: nextStocks
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
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
        <StockItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </StockListTemplate>
    );
  }
}

export default App;