import { NextResponse } from 'next/server';
import { prisma } from '../db';

import ApiResponse from '../../utils/api-response';
import ApiError from '../../utils/api-error';

export const healthCheckController = async () => {
  try {
    // Perform a lightweight query to check database connectivity
    await prisma.$queryRaw`SELECT 1`;

    return NextResponse.json(ApiResponse.ok('Database is healthy'), {
      status: 200,
    });
  } catch (error) {
    console.error('Health check failed:', error);

    // Return a 500 status code so monitoring tools know the app is down
    return NextResponse.json(
      ApiError.internalServerError('Database is unhealthy'),
      {
        status: 500,
      },
    );
  }
};
