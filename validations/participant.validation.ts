import * as yup from '../yup';

const participantValidationSchema = yup.object({
  name: yup.string().label('Nome do grupo').max(64).required(),
});

export default participantValidationSchema;
