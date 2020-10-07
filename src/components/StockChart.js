import React, { Component } from 'react';
import './StockChart.css';
import { Chart } from "react-google-charts";

class StockChart extends Component {
    
  /*
  constructor(props) {
    super(props);
  }
  */
  
  render() {
    return (
      <div class="stock-chart">
      <Chart
        width={'100%'}
        height={'20rem'}
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