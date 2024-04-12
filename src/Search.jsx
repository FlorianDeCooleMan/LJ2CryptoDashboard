import React, { useState, useEffect } from 'react';
import { fetchCoinData } from './fetchCoinDataFile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import './search.css';
import CoinNames from './CheckedCoins'; // Importeer het nieuwe component

const Search = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedCoins, setCheckedCoins] = useState({});

  useEffect(() => {
    const fetchCoins = async () => {
      const data = await fetchCoinData();
      setCoins(data);
    };

    fetchCoins();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheck = (coinId) => {
    setCheckedCoins((prevCheckedCoins) => ({
      ...prevCheckedCoins,
      [coinId]: !prevCheckedCoins[coinId],
    }));
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const checkedFilteredCoins = filteredCoins.filter(
    (coin) => checkedCoins[coin.id]
  );

  return (
    <div>
      <header>
        <input type="text" placeholder="Search" onChange={handleSearch} />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </header>
      <ul>
        {filteredCoins.map((coin) => (
          <li key={coin.id}>
            {coin.name}
            <input
              type="checkbox"
              checked={checkedCoins[coin.id] || false}
              onChange={() => handleCheck(coin.id)}
            />
          </li>
        ))}
      </ul>
      <h2>Checked Coins</h2>
      <CoinNames coins={checkedFilteredCoins} />
    </div>
  );
};

export default Search;
