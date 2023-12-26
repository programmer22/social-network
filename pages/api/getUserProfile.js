import { Pool } from 'pg';

const pool = new Pool({
    connectionString: 'your-connection-string',
    ssl: { rejectUnauthorized: false }
});

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { email } = req.query;

        try {
            const client = await pool.connect();
            const result = await client.query('SELECT * FROM profiles WHERE email = $1', [email]);
            client.release();

            if (result.rows.length > 0) {
                res.status(200).json(result.rows[0]);
            } else {
                res.status(404).json({ message: 'Profile not found' });
            }
        } catch (error) {
            console.error('Database query error', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
