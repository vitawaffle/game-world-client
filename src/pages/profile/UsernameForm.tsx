import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import useLocalization from '../../localization/useLocalization';
import yup from '../../yupExtensions';
import useClient from '../../hooks/useClient';
import useGetMe from '../../hooks/useGetMe';
import useSelector from '../../redux/useSelector';
import { selectUser } from '../../redux/slices/authSlice';
import Form from '../../components/form/Form';
import TextFormControl from '../../components/form/TextFormControl';

const UsernameForm = () => {
  const { strings } = useLocalization();
  const user = useSelector(selectUser);
  const client = useClient();
  const getMe = useGetMe();

  const schema = yup.object({
    username: yup.string()
      .required(strings.validation.required)
      .username()
      .unique('users', 'username'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ username }: FieldValues) => {
    await client.put('/users/me', {
      username,
    });
    await getMe();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitText={strings.pages.profile.save}
    >
      <TextFormControl
        id="username"
        label={`${strings.pages.profile.username}*`}
        formControl={register('username', {
          value: user?.username,
        })}
        validationError={errors.username}
      />
    </Form>
  );
};

export default UsernameForm;
