import { useForm, FieldValues } from 'react-hook-form';
import yup from '../../yupExtensions';
import { yupResolver } from '@hookform/resolvers/yup';

import TextFormControl from '../../components/form/TextFormControl';

const SigninForm = () => {
  const schema = yup.object({
    email: yup.string()
      .required('This field is required.')
      .email('Invalid email format.')
      .unique('users', 'email'),
    username: yup.string()
      .required('This field is required.')
      .username()
      .unique('users', 'username'),
    password: yup.string()
      .required('This field is required.')
      .password(),
    confirmedPassword: yup.string()
      .required('This field is required.')
      .oneOf([yup.ref('password'), null], 'Password mismatch.'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFormControl
        type="email"
        id="email"
        label="Email*"
        formControl={register('email')}
        validationError={errors.email}
      />
      <TextFormControl
        id="username"
        label="Username*"
        formControl={register('username')}
        validationError={errors.username}
      />
      <TextFormControl
        type="password"
        id="password"
        label="Password*"
        formControl={register('password')}
        validationError={errors.password}
      />
      <TextFormControl
        type="password"
        id="confirmedPassword"
        label="Confirm password*"
        formControl={register('confirmedPassword')}
        validationError={errors.confirmedPassword}
      />
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
