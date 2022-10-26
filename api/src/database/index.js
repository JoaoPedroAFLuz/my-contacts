const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '12345',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, values) => {
  console.log('Query:', query);
  console.log('Values:', values);
  const { rows } = await client.query(query, values);
  return rows;
};