import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma'; // Adjust the import according to your prisma instance location

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const volunteers = await prisma.volunteerProfile.findMany();
    return res.status(200).json(volunteers);
  } catch (error) {
    console.error('Error fetching volunteers:', error); // Log the error for debugging
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
