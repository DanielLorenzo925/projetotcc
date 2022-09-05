import { FormControl, InputLabel, Select, SelectProps } from "@mui/material";

import {
  Controller,
  ControllerProps,
  FieldError,
  FieldValues,
  get,
  useFormState,
} from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";
import useId from "@mui/material/utils/useId";

interface Props<T>
  extends Omit<ControllerProps<any>, "render">,
    Omit<SelectProps, "defaultValue" | "name"> {
  errors?: FieldError | string;
  itemHeight?: number;
}

const ITEM_PADDING_TOP = 8;
export const FormSelect = <T extends FieldValues>(props: Props<T>) => {
  const id = useId();
  const {
    control,
    errors: formErrors,
    name,
    label,
    itemHeight = 48,
    ...inputProps
  } = props;

  const { errors } = useFormState({ control });
  const error = get(errors, name);

  const MenuProps = {
    PaperProps: {
      style: { maxHeight: itemHeight * 4.5 + ITEM_PADDING_TOP },
    },
  };

  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel id={`${id}-select-helper-label`}>{label}</InputLabel>
            <Select
              label={label}
              labelId={`${id}-select-helper-label`}
              onChange={field.onChange}
              value={field.value ?? ""}
              variant="outlined"
              fullWidth
              MenuProps={MenuProps}
              {...inputProps}
            />
          </FormControl>
        )}
      />
      <ErrorMessage error={error ?? formErrors} />
    </>
  );
};
