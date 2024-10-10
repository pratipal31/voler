// pages/api/alerts.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import Alert from '../../../app/components/alerts/page';

const getAlerts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const alerts = await prisma.alert.findMany();
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch alerts' });
  }
};

export default getAlerts;
