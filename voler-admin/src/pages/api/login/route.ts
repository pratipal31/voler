// pages/api/login/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Adjust this import based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body; // Changed email to identifier

    try {
      // Attempt to find the user in the Individual table
      const individual = await prisma.individual.findFirst({
        where: {
          OR: [
            { email: identifier },
            { number: identifier }, // for phone number
            { username: identifier }
          ],
        },
      });

      // Attempt to find the user in the Organisation table
      const organisation = await prisma.organisation.findFirst({
        where: {
          OR: [
            { email: identifier },
            { number: identifier }, // for phone number
            { username: identifier }
          ],
        },
      });

      const user = individual || organisation;

      if (user && user.password === password) { // Ideally, hash and compare passwords
        // Create a session or token here if needed
        return res.status(200).json({ message: 'Login successful' });
      }

      return res.status(401).json({ error: 'Invalid email, phone number, username, or password' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
