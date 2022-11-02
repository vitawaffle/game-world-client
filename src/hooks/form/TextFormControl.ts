import { ChangeEvent } from 'react';

import FormControl from './FormControl';

interface TextFormControl extends FormControl<string> {
  props: {
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    onBlur: () => void,
    onFocus: () => void,
  };
}

export default TextFormControl;
