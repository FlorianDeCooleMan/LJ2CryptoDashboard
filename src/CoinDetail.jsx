import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css'
import './CoinDetail.css'

const CoinDetail = () => {
  const { name } = useParams();
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    fetch(`https://api.coincap.io/v2/assets/${name}`)
      .then(response => response.json())
      .then(data => setCryptoData(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Details: {cryptoData.name} ({cryptoData.symbol})</h1>
      <p>Rank: {cryptoData.rank}</p>
      <p>Price: ${parseFloat(cryptoData.priceUsd).toFixed(2)}</p>
      <p>Supply: {parseFloat(cryptoData.supply).toFixed(0)}</p>
      <p>VolumeUSD24HR: {parseFloat(cryptoData.volumeUsd24Hr).toFixed(0)}</p>
      <p>changePercent24Hr: {parseFloat(cryptoData.changePercent24Hr).toFixed(2)}</p>
      <a href="/">Back</a>
      
    </div>
  );
}

export default CoinDetail;