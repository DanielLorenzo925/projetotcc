import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { Controller, ControllerProps, FieldError, FieldValues, get, useFormState } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

interface Props<T> extends Omit<ControllerProps<T>, 'render'>, Omit<CheckboxProps, 'defaultValue' | 'name'> {
  label: string;
  errors?: FieldError | string;
}

export const FormCheckbox = <T extends FieldValues>(props: Props<T>) => {
  const { control, errors: formErrors, name, label, onChange, ...inputProps } = props;
  const { errors } = useFormState({ control });
  const error = get(errors, name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            label={label}
            control={
              <Checkbox
                {...inputProps}
                value={field.value}
                checked={field.value}
                onChange={(event, checked) => {
                  onChange && onChange(event, checked);
                  field.onChange(event, checked);
                }}
              />
            }
          />
        )}
      />
      <ErrorMessage error={error ?? formErrors} />
    </>
  );
};
