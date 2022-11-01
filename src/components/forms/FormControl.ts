import { FormControlEntries } from './Form';

interface FormControl {
  render: () => any;
  validate: (controls: FormControlEntries) => boolean;
}

export default FormControl;
