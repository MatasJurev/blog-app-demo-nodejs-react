import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';

const Stock = () => {
    const [stocks, setStocks] = useState([]);
    const [wait, setWait] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/stock`);
                setStocks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        setTimeout(() => {
            fetchData();
        }, wait ? 600000 : 0);
        setWait(true);
        return () => clearInterval();
    }, [stocks, wait]);

    return (
        <div>
            <Accordion defaultActiveKey="1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Historical Google (GOOG) stock data, in USD</Accordion.Header>
                    <Accordion.Body>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Open</th>
                                    <th>High</th>
                                    <th>Low</th>
                                    <th>Close</th>
                                    <th>Volume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stocks.map((stock, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{stock.date.slice(0, 10)}</td>
                                        <td>{stock.open}</td>
                                        <td>{stock.high}</td>
                                        <td>{stock.low}</td>
                                        <td>{stock.close}</td>
                                        <td>{stock.volume}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Stock;
