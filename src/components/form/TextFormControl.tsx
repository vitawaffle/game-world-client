import TextFormControlProps from './TextFormControlProps';

const TextFormControl = ({
  id,
  label,
  type,
  defaultValue,
  formControl,
  validationError,
  isInvalid,
  errorMessage,
}: TextFormControlProps) => {
  const isControlInvalid = () => isInvalidValidation() || isInvalid;
  const isInvalidValidation = () => validationError !== undefined;

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
        className={`form-control ${isControlInvalid() ? 'is-invalid' : ''}`}
      />
      {isInvalidValidation() && (
        <div id={`${id}Feedback`} className="invalid-feedback">
          {`${validationError?.message}`}
        </div>
      )}
      {isInvalid && !!errorMessage && (
        <div id={`${id}Feedback`} className="invalid-feedback">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextFormControl;
