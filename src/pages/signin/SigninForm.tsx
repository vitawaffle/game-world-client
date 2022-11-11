import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/form/Form';
import TextFormControl from '../../components/form/TextFormControl';
import useLocalization from '../../localization/useLocalization';
import useSignin from '../../hooks/useSignin';
import useLogin from '../../hooks/useLogin';
import useGetMe from '../../hooks/useGetMe';
import yup from '../../yupExtensions';

const SigninForm = () => {
  const { strings } = useLocalization();

  const schema = yup.object({
    email: yup.string()
      .required(strings.validation.required)
      .email(strings.validation.email)
      .unique('users', 'email'),
    username: yup.string()
      .required(strings.validation.required)
      .username()
      .unique('users', 'username'),
    password: yup.string()
      .required(strings.validation.required)
      .password(),
    confirmedPassword: yup.string()
      .required(strings.validation.required)
      .oneOf([yup.ref('password'), null], strings.validation.passwordMismatch),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();
  const signin = useSignin();
  const login = useLogin();
  const getMe = useGetMe();

  const onSubmit = async ({ email, username, password, }: FieldValues) => {
    await signin({
      email,
      username,
      password,
    });
    await login({
      username,
      password,
    });
    await getMe();
    navigate('/home');
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitText={strings.pages.signin.signIn}
    >
      <TextFormControl
        type="email"
        id="email"
        label={`${strings.pages.signin.email}*`}
        formControl={register('email')}
        validationError={errors.email}
      />
      <TextFormControl
        id="username"
        label={`${strings.pages.signin.username}*`}
        formControl={register('username')}
        validationError={errors.username}
      />
      <TextFormControl
        type="password"
        id="password"
        label={`${strings.pages.signin.password}*`}
        formControl={register('password')}
        validationError={errors.password}
      />
      <TextFormControl
        type="password"
        id="confirmedPassword"
        label= {`${strings.pages.signin.confirmPassword}*`}
        formControl={register('confirmedPassword')}
        validationError={errors.confirmedPassword}
      />
    </Form>
  );
};

export default SigninForm;
