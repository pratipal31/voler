import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, skills, certifications, availability } = req.body;

    try {
      // Create a new volunteer in the database
      const newVolunteer = await prisma.volunteerProfile.create({
        data: {
          name,
          email,
          phoneNumber,
          skills,
          certifications,
          availability,
          isVerified: false, // Default value
        },
      });

      res.status(200).json(newVolunteer);
    } catch (error) {
      console.error('Failed to create volunteer:', error);
      res.status(500).json({ error: 'Failed to create volunteer' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
