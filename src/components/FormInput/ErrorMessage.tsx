import { FieldError } from 'react-hook-form';

interface Props {
  error?: FieldError | string;
}

export const ErrorMessage = ({ error }: Props) => {
  const message = !!error && typeof error === 'string' ? error : (error as FieldError)?.message;
  return message ? <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>{message}</p> : null;
};
