import { Input, InputProps } from "@nextui-org/input";
import React from "react";
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form";

interface FXInputProps extends InputProps {
  name: string;
  label: string | React.ReactNode;
  registerOptions?: RegisterOptions<FieldValues, string>;
}
const FXInput = ({
  radius = "none",
  labelPlacement = "outside",
  isRequired = true,
  type = "text",
  variant = "underlined",
  defaultValue,
  placeholder,
  endContent,
  label,
  className,
  name,
  registerOptions: options,
}: FXInputProps) => {
  const {
    register,
    formState: { errors },
    getFieldState,
  } = useFormContext();

  return (
    <Input
      isRequired={isRequired}
      required={isRequired}
      className={`${className} text-left selection:bg-primary/15`}
      {...register(name, options)}
      radius={radius}
      variant={variant}
      labelPlacement={labelPlacement}
      type={type}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      endContent={endContent}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] && (errors[name]?.message as string)}
      color={!!errors[name] ? "danger" : "default"}
    />
  );
};

export default FXInput;
