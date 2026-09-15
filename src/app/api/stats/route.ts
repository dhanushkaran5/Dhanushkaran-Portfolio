import { NextResponse } from 'next/server';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export async function GET() {
  const stats = {
    projectsCount: PORTFOLIO_DATA.projects.length,
    techStackCount: PORTFOLIO_DATA.skillsData.reduce((acc, c) => acc + c.skills.length, 0),
    patentsCount: 1,
    uptimePercentage: '99.98%',
    activeSessions: Math.floor(Math.random() * 4) + 2,
    timestamp: new Date().toISOString(),
    status: 'OPERATIONAL',
    system: {
      nodeVersion: process.version || 'v20.x',
      framework: 'Next.js 15.5 App Router',
      environment: process.env.NODE_ENV || 'production',
    },
  };

  return NextResponse.json(stats, {
    headers: {
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
