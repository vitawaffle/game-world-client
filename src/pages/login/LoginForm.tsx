import useForm from '../../hooks/form/useForm';
import useTextFormControl from '../../hooks/form/useTextFormControl';
import useRequired from '../../hooks/validators/useRequired';

const LoginForm = () => {
  const form = useForm({
    controls: {
      username: useTextFormControl({
        validators: [
          useRequired(),
        ],
      }),
      password: useTextFormControl({
        validators: [
          useRequired(),
        ],
      }),
    },
    submit: () => {},
  });

  const username = () => form.controls.username;

  const password = () => form.controls.password;

  const isUsernameInvalid = () => username().isValidated && !username().isValid;

  const isPasswordInvalid = () => password().isValidated && !password().isValid;

  return (
    <form {...form.props}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username*
        </label>
        <input
          {...username().props}
          type="text"
          id="username"
          className={`form-control ${isUsernameInvalid() ? 'is-invalid' : ''}`}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password*
        </label>
        <input
          {...password().props}
          type="password"
          id="password"
          className={`form-control ${isPasswordInvalid() ? 'is-invalid': ''}`}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
};

export default LoginForm;
