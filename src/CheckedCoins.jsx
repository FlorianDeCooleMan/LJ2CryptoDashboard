import React from 'react';

const CheckedCoins = ({ coins }) => {
console.log("Checked Coins:", coins);
  return (
    <ul>
      {coins && coins.map((coin) => (
        <li>{coin.name}</li>
      ))}
    </ul>
  );
};
export default CheckedCoins;
