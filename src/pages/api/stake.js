import mysql from 'mysql';
require('dotenv').config();

export default async function handler(req, res) {
  
  const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  };
  

  const connection = mysql.createConnection(dbConfig);

  try {
    connection.connect();

    const { wallet } = req.query;

    const query = `SELECT * FROM accounts WHERE wallet = ?`;
    connection.query(query, [wallet], (error, results) => {
      if (error) {
        throw error;
      }

      res.status(200).json(results);
    });
  } catch (error) {
    res.status(500).json({ error: 'Veritabanı sorgusu sırasında bir hata oluştu.' });
  } finally {
    connection.end();
  }
}
