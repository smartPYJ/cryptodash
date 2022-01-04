import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { FundOutlined, GlobalOutlined, HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";
import logo from "../images/logo.png";



const Navbar = () => {
    return (
        <div className="nav-container">

            <div className="logo-container">
                <Avatar src={logo} size="large" />
                <Typography.Title level={2} className="logo">

                    <Link to="/">Kryptodash</Link>

                </Typography.Title>
                { /* <Button className="menu-control-conta"> </Button> */}

            </div>
            <Menu theme="dark">

                <Menu.Item icon={<HomeOutlined />} >
                    <Link to="/"> Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} >
                    <Link to="/cryptocurrencies"> Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} >
                    <Link to="/exchanges"> Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<GlobalOutlined />} >
                    <Link to="/news"> News</Link>
                </Menu.Item>
            </Menu>


        </div>
    )
}

export default Navbar
