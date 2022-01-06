import React from 'react';
import { Switch, Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, CryptoDetails, Cryptocurrencies, News, Exchanges } from './components'
import "./App.css";
import moment from "moment";
import { CopyrightOutlined } from '@ant-design/icons';


const App = () => {
  return (
    <div className="app">

      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>

          <div className="routes">
            <Routes>

              <Route path="/" element={<Homepage />} />



              <Route path="/exchanges" element={<Exchanges />} />



              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />



              <Route path="/crypto/:coinId" element={<CryptoDetails />} />



              <Route path="/news" element={<News />} />



            </Routes>

          </div>

        </Layout>


        <div className="footer">

          <Typography.Title  level={5} style={{color: 'white'}}>
            Kryptodesk  <CopyrightOutlined />  {moment().format('YYYY ')}
            All right reserved
          </Typography.Title>

          <Space>
            <Link to="/"> Home</Link>
            <Link to="/exchanges"> Exchange</Link>
            
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App
