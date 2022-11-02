interface FormControl<T> {
  value: T;
  isValid: boolean;
  isValidated: boolean;
  isTouched: boolean;
  validate: () => boolean;
  errorMessage: string;
  props: { [prop: string]: any };
}

export default FormControl;
