import { FormEventHandler, FunctionComponent, ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

const Form: FunctionComponent<FormProps> = ({ children, onSubmit }) => {
  return (
    <form noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
