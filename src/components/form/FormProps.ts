import { BaseSyntheticEvent } from 'react';
import { FieldValues } from 'react-hook-form';

type FormProps = {
  onSubmit: (event: BaseSyntheticEvent) => Promise<void>;
  submitText?: string;
  children: any;
};

export default FormProps;
