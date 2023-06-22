import React from "react";
import { Chart as PieChartJs, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";

PieChartJs.register(ArcElement, Tooltip, Legend)

function PieChart(props) {

    const chartDataLabels = props.data.map((item) => {
        return item.product;
    });

    const chartDataValues = props.data.map((item) => {
        return item.percent;
    });
    const chartdata = {
        labels: chartDataLabels,
        datasets: [
          {
            data: chartDataValues,
            backgroundColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484'
            ],
            borderColor: [
                '#98D89E',
                '#F6DC7D',
                '#EE8484'
            ],
            borderWidth: 1,
          },
        ],
      };

  return (
    <div style={{height:"145px", width:"145px"}}>
      <Pie
        data={chartdata}
        options={{
          plugins: {
            title: {
              display: false,
              text: "Top Products"
            },
            legend: {
              display: false
            },
          }
        }}
      />
    </div>
  );
}
export default PieChart;