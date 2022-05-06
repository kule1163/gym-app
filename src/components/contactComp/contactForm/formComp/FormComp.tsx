import React from "react";
import { Typography } from "@mui/material";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import NestedInput from "../../../nestedInputs/NestedInput";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface FormCompProps {
  onSubmit: () => void;
}

const FormComp = ({ onSubmit }: FormCompProps) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    message: Yup.string().required("Message is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const methods = useForm(formOptions);

  const onHere = (data: any) => {
    console.log(data);
    methods.reset();
    onSubmit();
  };

  return (
    <FormProvider {...methods}>
      <form
        data-testid="form"
        className="form-section"
        onSubmit={methods.handleSubmit(onHere)}
      >
        <div className="input-container">
          <NestedInput
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          {methods.formState.errors?.email && (
            <Typography className="error-text">
              <span data-tesid="valid-star" className="dash">
                *
              </span>
              {methods.formState.errors?.email?.message}
            </Typography>
          )}
        </div>
        <div className="input-container">
          <Controller
            control={methods.control}
            name="message"
            render={({ field: { ref, ...field } }) => (
              <textarea
                data-testid="textarea"
                className="textarea"
                ref={ref}
                rows={7}
                {...field}
              />
            )}
          />
          {methods.formState.errors?.message && (
            <Typography className="error-text">
              <span className="dash">*</span>
              {methods.formState.errors?.message?.message}
            </Typography>
          )}
        </div>
        <button
          data-testid="button"
          type="submit"
          className="orange-button-container"
        >
          SEND YOUR MESSAGE
        </button>
      </form>
    </FormProvider>
  );
};

export default FormComp;
