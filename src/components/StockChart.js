import React, { Component } from 'react';
import './StockChart.css';
import { Chart } from "react-google-charts";

class StockChart extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };
  }
  
  render() {
    const { isLoaded } = this.state;

    return (
      <div>
      <Chart
        width={'1000px'}
        height={'400px'}
        chartType="Line"
        loader={<div>Loading</div>}
        data={this.props.series}
        rootProps={{ 'data-testid': '3' }}
        options={{
          legend: {
            position: 'none'
          },
          axisTitlesPosition: 'none'
        }}
      />
    </div>
    );
  }
}

export default StockChart;