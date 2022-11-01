import { useState } from 'react';

import FormControl from './FormControl';

const Form = ({ controls, onSubmit, submitText }: FormProps) => {
  const [isValidated, setIsValidated] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(controls);
    }
  };

  const validate = () => {
    setIsValidated(true);
    for (const control of Object.values(controls)) {
      if (!control.validate(controls)) {
        setIsValid(false);
        return false;
      }
    }
    setIsValid(true);
    return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.values(controls).map(control => control.render())}
      <button type="submit" className="btn btn-primary">
        {submitText ?? 'Submit'}
      </button>
    </form>
  );
};

export default Form;

export interface FormProps {
  controls: FormControlEntries;
  onSubmit: (controls: FormControlEntries) => void;
  submitText?: string;
}

export interface FormControlEntries {
  [controlName: string]: FormControl;
}
