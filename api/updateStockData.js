import axios from "axios";
import { db } from "./db.js";
import 'dotenv/config';


function makeRequest() {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=GOOG&apikey=${process.env.ALPHA_API_KEY}}`)
        .then(response => {

            const data = response.data['Monthly Time Series'];
            const entries = Object.entries(data);
            const del_sql = 'DELETE FROM stock_data';
            const insert_sql = 'INSERT INTO stock_data (date, open, high, low, close, volume) VALUES ?';

            db.query(del_sql, (err, result) => {
                if (err) {
                    console.error('Error deleting data from MySQL database: ', err);
                } else {
                    console.log(`${result.affectedRows} rows deleted from MySQL database.`);
                }
            });

            const values = entries.map(([date, values]) => [date, values['1. open'], values['2. high'], values['3. low'], values['4. close'], values['5. volume']]);
            db.query(insert_sql, [values], (err, result) => {
                if (err) {
                    console.error('Error inserting data into MySQL database: ', err);
                } else {
                    console.log(`${result.affectedRows} rows inserted into MySQL database.`);
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
}

export default makeRequest;