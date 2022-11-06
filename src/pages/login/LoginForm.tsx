import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import TextFormControl from '../../components/form/TextFormControl';
import useLocalization from '../../localization/useLocalization';

const LoginForm = () => {
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { strings } = useLocalization();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextFormControl
        id="username"
        label={`${strings.pages.login.username}*`}
        formControl={register('username')}
        validationError={errors.username}
      />
      <TextFormControl
        type="password"
        id="password"
        label={`${strings.pages.login.password}*`}
        formControl={register('password')}
        validationError={errors.password}
      />
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
