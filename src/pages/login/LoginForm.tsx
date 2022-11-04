import { useForm, FieldValues } from 'react-hook-form';

import TextFormControl from '../../components/form/TextFormControl';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
