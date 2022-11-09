import { useState, BaseSyntheticEvent } from 'react';

import FormProps from './FormProps';

const AppForm = ({
  onSubmit,
  submitText,
  children,
}: FormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: BaseSyntheticEvent) => {
    setIsLoading(true);
    onSubmit(event).finally(() => {
      setIsLoading(false);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit" className="btn btn-primary">
        {isLoading && (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
        )}
        {submitText ?? 'Submit'}
      </button>
    </form>
  );
};

export default AppForm;
