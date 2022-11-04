import TextFormControlProps from './TextFormControlProps';

const TextFormControl = ({
  id,
  label,
  type,
  defaultValue,
  formControl,
  validationError,
}: TextFormControlProps) => {
  const isInvalid = () => validationError !== undefined;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type ?? 'text'}
        id={id}
        defaultValue={defaultValue ?? ''}
        {...formControl}
        className={`form-control ${isInvalid() ? 'is-invalid' : ''}`}
      />
      {isInvalid() && (
        <div id={`${id}Feedback`} className="invalid-feedback">
          {`${validationError?.message}`}
        </div>
      )}
    </div>
  );
};

export default TextFormControl;
