import React from 'react'
import millify from "millify";
import { Col, Row, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';


const { Title } = Typography;


const Homepage = () => {
    const {data , isFetching} = useGetCryptosQuery();
    console.log(data);
    return (
        <>
            <Title level={2} className="heading"> Global Krypto Statistic</Title>
            <Row>
                <Col span={12}> <Statistic title=" Total Cryptocurrency"  value="5"/></Col>
                <Col span={12}> <Statistic title=" Total Exchanges"  value="5"/></Col>
                <Col span={12}> <Statistic title=" Total Market Cap"  value="5"/></Col>
                <Col span={12}> <Statistic title=" Total 24hr Volume"  value="5"/></Col>
                <Col span={12}> <Statistic title=" Total Market"  value="5"/></Col>

            </Row>
        </>
    )
}

export default Homepage
