import { useState, useEffect } from 'react';
import { fetchCoinData } from './fetchCoinDataFile';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; 
import { Link } from 'react-router-dom'; 

function Table() {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setCoins(data);
    };

    fetchData();
  }, [limit]);

  return (
    <>
      <section className='block' id='scroll'>
        <table>
          <thead className='table-header'>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Price(USD)</th>
            </tr>
          </thead>
          <tbody>
            {coins.map(({id, name, rank, priceUsd})=>(
              <tr key={id}>
                <td>{rank}</td>
                <td><Link to={`/CoinDetail/${id}`}>{name}</Link></td>
                <td>${parseFloat(priceUsd).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Table;
