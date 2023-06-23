import { UserInterface } from 'interfaces/user';
import { HealthPlanInterface } from 'interfaces/health-plan';
import { GetQueryInterface } from 'interfaces';

export interface SeniorUserInterface {
  id?: string;
  user_id?: string;
  health_plan_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  health_plan?: HealthPlanInterface;
  _count?: {};
}

export interface SeniorUserGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  health_plan_id?: string;
}
