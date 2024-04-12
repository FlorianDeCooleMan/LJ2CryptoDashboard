//piechart niet zelf gemaakt maar van: https://mui.com/x/react-charts/pie/

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { fetchCoinData } from './fetchCoinDataFile';
import './App.css';

export default function BasicPie() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchCoinDataAsync = async () => {
      const coinData = await fetchCoinData();
      setData(coinData);
    };

    fetchCoinDataAsync();
  }, []);

  const topCoins = data.slice(0, 6);

  return (
    <PieChart
      series={[
        {
          data: topCoins.map((coin, index) => ({
            id: index,
            value: coin.marketCapUsd,
            label: coin.name,
            
          })),
        },
      ]}
      width={400}
      height={200}
      sx={{ "tspan": {fill:'white'} }}
    />
  );
}