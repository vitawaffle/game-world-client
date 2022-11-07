import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import TextFormControl from '../../components/form/TextFormControl';
import Form from '../../components/form/Form';
import useLocalization from '../../localization/useLocalization';
import useLogin from '../../hooks/useLogin';

const LoginForm = () => {
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { strings } = useLocalization();

  const navigate = useNavigate();
  const login = useLogin();

  const onSubmit = (data: FieldValues) => {
    login({
      username: data.username,
      password: data.password,
    }).then(() => {
      navigate('/home');
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitText={strings.pages.login.logIn}
    >
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
    </Form>
  );
};

export default LoginForm;
