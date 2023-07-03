import { db } from "../db.js";

export const getStockData = (req, res) => {
    const q = "SELECT * FROM stock_data";

    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).send(err);
        }

        return res.status(200).json(data);
    });
};