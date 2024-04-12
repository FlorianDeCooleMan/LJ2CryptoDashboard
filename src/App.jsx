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

function App() {

  return(
<>
<html>
<body>
<div className="container">
  <div className="row-1">
    <Table className="block"></Table>
    <div className="block  block-pie">
      <BasicPie className="block"></BasicPie>
    </div>
    <div className="block" id='scroll'>
      <Search></Search>
    </div>
  </div>
  <div className="row-2">
    <div className="block">
    <CheckedCoins />
    </div>
    <div className="block">Blok 5</div>
  </div>
</div>
</body>
</html>
</>
  )
}
export default App