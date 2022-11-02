import Validator from './Validator';

const useRequired = (errorMessage?: string): Validator => {
  const isValid = (value: any) => value && value !== '';

  return {
    isValid,
    errorMessage: errorMessage ?? 'This field is required',
  };
};

export default useRequired;
