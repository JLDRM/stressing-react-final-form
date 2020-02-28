import { Validators } from '@lemoncode/fonk';
import { createFinalFormValidation } from '@lemoncode/fonk-final-form';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.required.validator,
        message: 'Required',
      },
      {
        validator: Validators.email.validator,
        message: 'The value must be a correct mail',
      },
    ],
    password: [
      {
        validator: Validators.required.validator,
        message: 'Required',
      },
    ]
  },
};

export const formValidation = createFinalFormValidation(validationSchema);
