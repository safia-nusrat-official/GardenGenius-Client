import React, { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface FormProps extends FormConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
  className?: string;
}
interface FormConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}

const FXForm = ({
  children,
  className,
  onSubmit,
  defaultValues,
  resolver
}: FormProps) => {
  const formConfig: FormConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm({
    mode:"onBlur",
    ...formConfig
  });
  const {
    reset,
    handleSubmit,
  } = methods;
  const submitHandler = async (data: any) => {
    await onSubmit(data);
    reset();
  };
  
  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(submitHandler)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FXForm;
