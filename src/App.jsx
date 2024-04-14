import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './Table'
import Footer from './footer'
import BasicPie from './PieChart'
import Search from './Search'
import { Route, Routes } from 'react-router-dom'
import CheckedCoins from './CheckedCoins'
import { LineChart } from '@mui/x-charts'
import BitcoinLineChart from './LineChart'

function App() {

  return(
<>
<html>
<body>
<div className="container">
  <div className="row-1">
  <div className="block" id='scroll'>
      <h1>Welcome</h1>
      <p>Welcome to the Florian® crypto dashboard! Happy trading! 📈💰</p>
      <p>Made by Florian</p>
    </div>
    <Table className="block" id='scroll'></Table>
    <div className="block  block-pie">
      <BasicPie className="block"></BasicPie>
    </div>
  </div>
  <div className="row-2" >
    <div className="block" id='scroll'>
      <Search></Search>
    </div>
    <div className="block">
      <h3>Bitcoin YTD (USD)</h3>
      <BitcoinLineChart></BitcoinLineChart>
    </div>
  </div>
</div>
</body>
</html>
</>
  )
}
export default App