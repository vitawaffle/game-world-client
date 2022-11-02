import FormControl from './FormControl';

interface Form {
  controls: { [controlName: string]: FormControl<any> },
  props: {
    onSubmit: () => void,
  };
}

export default Form;
