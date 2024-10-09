// pages/api/volunteer.ts

import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Ensure the request method is POST
  if (req.method === "POST") {
    const { name, email, phoneNumber, skills, certifications, availability } = req.body;

    try {
      // Save the data to the database using Prisma
      const volunteer = await prisma.volunteerProfile.create({
        data: {
          name,
          email,
          phoneNumber,
          skills: skills || [], // Ensure skills is an array
          certifications: certifications || [], // Ensure certifications is an array
          availability,
        },
      });

      return res.status(200).json({ message: "Volunteer details successfully submitted!", volunteer });
    } catch (error) {
      console.error("Error saving volunteer:", error);
      return res.status(500).json({ error: "Failed to save volunteer details." });
    }
  } else {
    // Method not allowed
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
