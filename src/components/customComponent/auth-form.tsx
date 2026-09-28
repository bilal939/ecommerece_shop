import * as React from "react";
import {
  Controller,
  type Control,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { Field, FieldLabel, FieldError } from "../ui/field";
import { Input } from "../ui/input";
type FormInputFieldProps<T extends FieldValues> = Omit<
  React.ComponentProps<typeof Input>,
  "name" | "defaultValue"
> & {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
};

export function FormInputField<T extends FieldValues>({
  control,
  name,
  label,
  id,
  autoComplete = "off",
  ...inputProps
}: FormInputFieldProps<T>) {
  const reactId = React.useId();
  const inputId = id ?? `${name}-${reactId}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
          <Input
            {...inputProps}
            {...field}
            id={inputId}
            aria-invalid={fieldState.invalid}
            autoComplete={autoComplete}
          />
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
