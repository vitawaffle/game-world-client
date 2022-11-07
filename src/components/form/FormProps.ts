import { BaseSyntheticEvent } from 'react';

type FormProps = {
  onSubmit: (event: BaseSyntheticEvent) => Promise<void>;
  submitText?: string;
  children: any;
};

export default FormProps;
