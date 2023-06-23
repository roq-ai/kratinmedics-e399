import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { healthPlanValidationSchema } from 'validationSchema/health-plans';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getHealthPlans();
    case 'POST':
      return createHealthPlan();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getHealthPlans() {
    const data = await prisma.health_plan
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'health_plan'));
    return res.status(200).json(data);
  }

  async function createHealthPlan() {
    await healthPlanValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.senior_user?.length > 0) {
      const create_senior_user = body.senior_user;
      body.senior_user = {
        create: create_senior_user,
      };
    } else {
      delete body.senior_user;
    }
    const data = await prisma.health_plan.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
