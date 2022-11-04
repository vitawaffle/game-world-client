import { useForm, FieldValues } from 'react-hook-form';

import TextFormControl from '../../components/form/TextFormControl';

const SigninForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFormControl
        type="email"
        id="email"
        label="Email*"
        formControl={register('email', {
          required: 'This field is required.',
        })}
        validationError={errors.email}
      />
      <TextFormControl
        id="username"
        label="Username*"
        formControl={register('username', {
          required: 'This field is required.',
        })}
        validationError={errors.username}
      />
      <TextFormControl
        type="password"
        id="password"
        label="Password*"
        formControl={register('password', {
          required: 'This field is required.',
        })}
        validationError={errors.password}
      />
      <TextFormControl
        type="password"
        id="confirmedPassword"
        label="Confirm password*"
        formControl={register('confirmedPassword', {
          required: 'This field is required.',
        })}
        validationError={errors.confirmedPassword}
      />
      <button type="submit" className="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};

export default SigninForm;
