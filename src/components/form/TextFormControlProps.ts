import { UseFormRegisterReturn, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

type TextFormControlProps = {
  id: string;
  label: string;
  type?: 'text'|'password'|'email';
  defaultValue?: string;
  formControl: UseFormRegisterReturn;
  validationError: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
};

export default TextFormControlProps;
