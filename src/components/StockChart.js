import React, { Component } from 'react';
import './StockChart.css';
import { Chart } from "react-google-charts";

class StockChart extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
    
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        series: [

          [
            'Time',
            'Open',
            'Close'
          ],
                [1, 37.8, 80.8],
                [2, 30.9, 69.5],
                [3, 25.4, 57],
                [4, 11.7, 18.8],
                [5, 11.9, 17.6],
                [6, 8.8, 13.6],
                [7, 7.6, 12.3],
                [8, 12.3, 29.2],
                [9, 16.9, 42.9],
                [10, 12.8, 30.9],
                [11, 5.3, 7.9],
                [12, 6.6, 8.4],
                [13, 4.8, 6.3],
                [14, 4.2, 6.2],


        ]
      };
    }

    parseJSON() {
      var imported = [

        [
          'Time',
          'Open',
          'Close'
        ]

      ];

      console.log(this.state.items["Time Series (5min)"]);

      const keys = Object.keys(this.state.items["Time Series (5min)"]);

      for(var okay = 0; okay < keys.length; okay++) {
        const item = this.state.items["Time Series (5min)"][keys[okay]];
        imported.push([ keys[okay].split(" ")[1], parseFloat(item['1. open']), parseFloat(item['4. close']) ]);
      }
      this.setState(
        {
          series: imported
        }
      )

      console.log(this.state.series);
    }
  
    componentDidMount() {
      fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol="+this.props.stock+"&interval=5min&apikey=B0FMW70DUVTCNFDP")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
            console.log(result);
            this.parseJSON();
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items, series } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
          <Chart
            width={'80%'}
            height={'400px'}
            chartType="Line"
            loader={<div>Loading Chart</div>}
            data={series}
            options={{
              chart: {
                title: items["Meta Data"]["2. Symbol"],
                subtitle: items["Meta Data"]["1. Information"],
              },
            }}
          />
        </div>
        );
      }
    }
  }

export default StockChart;