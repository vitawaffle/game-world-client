interface Validator {
  isValid: (value: any) => boolean;
  errorMessage: string;
}

export default Validator;
