import Form from './Form';
import FormControl from './FormControl';

const useForm = ({ controls, submit }: FormArgs): Form => {
  const onSubmit = () => {
    if (validate()) {
      submit(values());
    }
  };

  const values = () => {
    const values: { [key: string]: any } = {};
    Object.keys(controls).forEach(controlName => {
      values[controlName] = controls[controlName].value;
    });
    return values;
  };

  const validate = () => {
    let isValid = true;
    for (const control of controlArray()) {
      if (!control.validate()) {
        isValid = false;
      }
    }
    return isValid;
  };

  const controlArray = () => Object.values(controls);

  return {
    controls,
    props: {
      onSubmit,
    },
  };
};

export default useForm;

export interface FormArgs {
  controls: { [controlName: string]: FormControl<any> };
  submit: (values: { [key: string]: any }) => void;
}
