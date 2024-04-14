import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import axios from 'axios';

function BitcoinLineChart() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1')
      .then(response => {
        setData(response.data.data.map(item => ({ x: new Date(item.date), y: item.priceUsd })));
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <LineChart
      xAxis={[{ data: data.map(item => item.x) }]}
      series={[
        {
          data: data.map(item => item.y),
          showMark: ({ index }) => index % 0 === 0,
        },
      ]}
      height={260}
      margin={{ left: 60, right: 30, top: 6, bottom: 30 }}
      grid={{ vertical: true, horizontal: true }}
      sx={{
        //change left yAxis label styles
       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        fill:"white"
       },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            fill:"darkslategray"
         },

      }}
      
    />
  );
}

export default BitcoinLineChart;