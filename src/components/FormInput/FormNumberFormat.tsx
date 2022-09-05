import { StandardTextFieldProps, TextField } from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState,
} from "react-hook-form";
import NumberFormat, { NumberFormatProps } from "react-number-format";
import { ErrorMessage } from "./ErrorMessage";

interface Props<T>
  extends Omit<ControllerProps<any>, "render">,
    Omit<NumberFormatProps<StandardTextFieldProps>, "defaultValue" | "name"> {
  errors?: FieldError | string;
}

export const FormNumberFormat = <T extends FieldValues>(props: Props<T>) => {
  const { control, errors: formErrors, name, ...inputProps } = props;
  const { errors } = useFormState({ control });
  const error = get(errors, name);

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <NumberFormat
            {...inputProps}
            fullWidth
            customInput={TextField}
            value={field.value ?? ""}
            onValueChange={(values, source) => {
              if (source.event) {
                const { event } = source;
                const { floatValue: value } = values;
                field.onChange({
                  ...event,
                  target: { ...event.target, value },
                });
              }
            }}
          />
        )}
      />
      <ErrorMessage error={error ?? formErrors} />
    </>
  );
};
