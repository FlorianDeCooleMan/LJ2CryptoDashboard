import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CoinDetail from "./CoinDetail.jsx";

function Home() {
  return <App />;
}

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CoinDetail/:name" element={<CoinDetail />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Main />
  </Router>
);