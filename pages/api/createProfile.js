import { Pool } from 'pg';
import Profile from '../../models/Profile'

const pool = new Pool({
    connectionString: 'postgresql://nicklopacki95:RYZWT6OpMrN3@ep-old-sky-77997761.us-east-2.aws.neon.tech/neondb?sslmode=require',
    ssl: {
        rejectUnauthorized: false // This is necessary if your database server's SSL certificate is not CA-signed.
    }
});

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    try {
        const { firstName, lastName, email, dateOfBirth, sex } = req.body;
        
        if (!firstName || !lastName || !email || !dateOfBirth || !sex) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Use Drizzle ORM to create the profile
        await Profile.create({
            firstName,
            lastName,
            email,
            dateOfBirth,
            sex
        }, { pool });

        res.status(201).json({ message: 'Profile created successfully' });
    } catch (error) {
        console.error('Error in profile creation:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}
