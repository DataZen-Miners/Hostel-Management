import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const BarChart = ({ data, categoryKey, valueKey, chartTitle = "Bar Chart", xAxisLabel = "Categories" }) => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      id: "generalized-bar"
    },
    xaxis: {
        title:{
            text:xAxisLabel
        },
      categories: []
    },
    title: {
      text: chartTitle,
      align: "center"
    },
    yaxis: {
      title: {
        text: "Values"
      }
    }
  });
  const [chartSeries, setChartSeries] = useState([
    {
      name: "Values",
      data: []
    }
  ]);

  useEffect(() => {
    if (data && data.length > 0) {
      const valueCounts = data.reduce((acc, item) => {
        const key = item[categoryKey];
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          categories: Object.keys(valueCounts)
        }
      }));
      setChartSeries([
        {
          name: "Values",
          data: Object.values(valueCounts)
        }
      ]);
    }
  }, [data, categoryKey, valueKey]);

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

// Add propTypes validation
BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  categoryKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string, // Make it optional if not always needed
  chartTitle: PropTypes.string,
  xAxisLabel: PropTypes.string,
};

export default BarChart;