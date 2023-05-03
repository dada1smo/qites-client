import * as yup from '../yup';

const groupValidationSchema = yup.object({
  name: yup.string().label('Nome do grupo').max(64).required(),
});

export default groupValidationSchema;
