import React from 'react';



const CheckedCoins = ({ coins }) => {
console.log("hallo:", coins);
  return (
    <>
    <ul>
      {coins && coins.map((coin) => (
        <li>{coin.name} ${parseFloat(coin.priceUsd).toFixed(2)}</li>
      ))}
    </ul>
    </>
  );
};
export default CheckedCoins;
