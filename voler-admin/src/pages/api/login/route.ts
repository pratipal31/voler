// pages/api/login/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Adjust this import based on your project structure
import { setCookie } from 'cookies-next'; // You can use a library to manage cookies

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;

    try {
      const user = await prisma.individual.findFirst({
        where: {
          OR: [
            { email: identifier },
            { number: identifier }, // for phone number
            { username: identifier }
          ],
        },
      });

      const org = await prisma.organisation.findFirst({
        where: {
          OR: [
            { email: identifier },
            { number: identifier }, // for phone number
            { username: identifier }
          ],
        },
      });

      if ((user && user.password === password) || (org && org.password === password)) {
        const loggedInUser = user || org; // Get the user or organization
        if (!loggedInUser) {
          return res.status(401).json({ error: 'Invalid email/phone number/username or password' });
        }
        const userName = loggedInUser.name;

        // Set a cookie for the session
        setCookie('userSession', JSON.stringify({ id: loggedInUser.id, name: userName }), { req, res });

        return res.status(200).json({ message: 'Login successful', userName });
      }

      return res.status(401).json({ error: 'Invalid email/phone number/username or password' });
    } catch (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.setHeader('Allow', ['POST']).status(405).end(`Method ${req.method} Not Allowed`);
  }
}
