const mapping: Record<string, string> = {
  'health-plans': 'health_plan',
  organizations: 'organization',
  'senior-users': 'senior_user',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
