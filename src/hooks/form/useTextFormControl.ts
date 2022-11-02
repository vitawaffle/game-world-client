import { useState, ChangeEvent } from 'react';

import TextFormControl from './TextFormControl';
import Validator from '../validators/Validator';

const useTextFormControl = ({
  defaultValue,
  validators,
}: TextFormControlArgs): TextFormControl => {
  const [value, setValue] = useState(defaultValue ?? '');
  const [isValidated, setIsValidated] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    validate();
  };

  const validate = () => {
    setIsValidated(true);
    for (const validator of validators) {
      if (!validator.isValid(value)) {
        setErrorMessage(validator.errorMessage);
        setIsValid(false);
        return false;
      }
    }
    setIsValid(true);
    return true;
  };

  const onFocus = () => {
    setIsTouched(true);
  };

  return {
    value,
    isValidated,
    isValid,
    isTouched,
    validate,
    errorMessage,
    props: {
      value,
      onChange,
      onBlur,
      onFocus,
    },
  };
};

export default useTextFormControl;

export interface TextFormControlArgs {
  defaultValue?: string;
  validators: Validator[];
}
