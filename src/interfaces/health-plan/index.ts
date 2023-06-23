import { SeniorUserInterface } from 'interfaces/senior-user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface HealthPlanInterface {
  id?: string;
  name: string;
  description?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  senior_user?: SeniorUserInterface[];
  organization?: OrganizationInterface;
  _count?: {
    senior_user?: number;
  };
}

export interface HealthPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  organization_id?: string;
}
