import React, { Component } from 'react';
import './StockChart.css';
import { Chart } from "react-google-charts";

class StockChart extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false
    };
  }
  
  render() {
    const { error, isLoaded } = this.state;
    console.log(this.props);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <Chart
          width={'1000px'}
          height={'400px'}
          chartType="Line"
          loader={<div>Loading</div>}
          data={this.props.series}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
      );
    }
  }
}

export default StockChart;