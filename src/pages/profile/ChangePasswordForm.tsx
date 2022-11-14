import { useForm, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import yup from '../../yupExtensions';
import useLocalization from '../../localization/useLocalization';
import Form from '../../components/form/Form';
import TextFormControl from '../../components/form/TextFormControl';

const ChangePasswordForm = () => {
  const { strings } = useLocalization();

  const schema = yup.object({
    oldPassword: yup.string()
      .required(strings.validation.required),
    newPassword: yup.string()
      .required(strings.validation.required)
      .password(),
    confirmedPassword: yup.string()
      .required(strings.validation.required)
      .oneOf([yup.ref('password'), null], strings.validation.passwordMismatch),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    oldPassword,
    newPassword,
    confirmedPassword,
  }: FieldValues) => {
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      submitText={strings.pages.profile.changePassword}
    >
      <TextFormControl
        type="password"
        id="oldPassword"
        label={`${strings.pages.profile.oldPassword}*`}
        formControl={register('oldPassword')}
        validationError={errors.oldPassword}
      />
      <TextFormControl
        type="password"
        id="newPassword"
        label={`${strings.pages.profile.newPassword}*`}
        formControl={register('newPassword')}
        validationError={errors.newPassword}
      />
      <TextFormControl
        type="password"
        id="confirmedPassword"
        label={`${strings.pages.profile.confirmPassword}*`}
        formControl={register('confirmedPassword')}
        validationError={errors.confirmedPassword}
      />
    </Form>
  );
};

export default ChangePasswordForm;
