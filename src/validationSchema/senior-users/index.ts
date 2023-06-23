import * as yup from 'yup';

export const seniorUserValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  health_plan_id: yup.string().nullable(),
});
