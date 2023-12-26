import { Pool } from 'pg';

const pool = new Pool({
  connectionString: 'postgresql://nicklopacki95:RYZWT6OpMrN3@ep-old-sky-77997761.us-east-2.aws.neon.tech/neondb?sslmode=require',
  ssl: true
});

export default async function handler(req, res) {
  const client = await pool.connect();
  try {
    const response = await client.query('SELECT version()');
    console.log(response.rows[0]);
    res.status(200).json({ status: 'success', data: response.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Database connection failed' });
  } finally {
    client.release();
  }
}
