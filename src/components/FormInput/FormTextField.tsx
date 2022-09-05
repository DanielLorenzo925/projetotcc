import { StandardTextFieldProps, TextField } from '@mui/material';
import { Controller, ControllerProps, FieldError, FieldValues, get, useFormState } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

interface Props<T> extends Omit<ControllerProps<T>, 'render'>, Omit<StandardTextFieldProps, 'defaultValue' | 'name'> {
  errors?: FieldError | string;
}

export const FormTextField = <T extends FieldValues>(props: Props<T>) => {
  const { control, errors: formErrors, name, ...inputProps } = props;
  const { errors } = useFormState({ control });
  const error = get(errors, name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <TextField onChange={onChange} value={value ?? ''} variant="outlined" fullWidth {...inputProps} />
          </>
        )}
      />
      <ErrorMessage error={error ?? formErrors} />
    </>
  );
};
