// pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { type, formData } = req.body;

    try {
      if (type === 'Person') {
        // Save person data to MongoDB using Prisma
        const person = await prisma.individual.create({
          data: {
            name: formData.name,
            description: formData.description,
            number: formData.phone,
            email: formData.email,
            location: formData.location,
            username: formData.username,
            password: formData.password,
          },
        });
        res.status(200).json({ message: 'Person added to MongoDB', person });
      } else if (type === 'Organization') {
        // Save organization data to MongoDB using Prisma
        const organization = await prisma.organisation.create({
          data: {
            name: formData.name,
            description: formData.description,
            number: formData.phone,
            email: formData.email,
            location: formData.location,
            username: formData.username,
            password: formData.password,
            resourceId: "Some_Resource_ID", // Optional: Replace with logic to generate resourceId
          },
        });
        res.status(200).json({ message: 'Organization added to MongoDB', organization });
      } else {
        res.status(400).json({ error: 'Invalid user type' });
      }
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
      res.status(500).json({ error: 'Error saving data to MongoDB' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
