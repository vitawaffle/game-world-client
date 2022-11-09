import { useState } from 'react';
import { useForm, FieldValues } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import TextFormControl from '../../components/form/TextFormControl';
import Form from '../../components/form/Form';
import useLocalization from '../../localization/useLocalization';
import useLogin from '../../hooks/useLogin';
import useGetMe from '../../hooks/useGetMe';

const LoginForm = () => {
  const { strings } = useLocalization();

  const schema = yup.object({
    username: yup.string().required(strings.validation.required),
    password: yup.string().required(strings.validation.required),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigate = useNavigate();
  const login = useLogin();
  const getMe = useGetMe();
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);

  const onSubmit = async ({ username, password }: FieldValues) => {
    setIsInvalidCredentials(false);
    try {
      await login({
        username,
        password,
      });
      await getMe();
      navigate('/home');
    } catch (error: any) {
      if (error.response.status === 401) {
        setIsInvalidCredentials(true);
      }
    }
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
        isInvalid={isInvalidCredentials}
      />
      <TextFormControl
        type="password"
        id="password"
        label={`${strings.pages.login.password}*`}
        formControl={register('password')}
        validationError={errors.password}
        isInvalid={isInvalidCredentials}
        errorMessage={strings.pages.login.invalidCredentials}
      />
    </Form>
  );
};

export default LoginForm;
