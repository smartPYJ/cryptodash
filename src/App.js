import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar,Homepage, CryptoDetails, Cryptocurrencies, News , Exchanges } from './components'
import "./App.css";


const App = () => {
  return (
    <div className="app">

      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>

          <div className="routes">
            <Switch>

              <Routes ecact path="/">
                <Homepage />
              </Routes>

              <Routes ecact path="/exchanges">
                <Exchanges />
              </Routes>

              <Routes ecact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Routes>

              <Routes ecact path="/crypto/:coinId">
                <CryptoDetails />
              </Routes>

              <Routes ecact path="/news">
                <News />
              </Routes>


            </Switch>

          </div>

        </Layout>


      </div>
      <div className="footer"></div>
    </div>
  )
}

export default App
