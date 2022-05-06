import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../../../../../../styles.css";
import { Typography } from "@mui/material";
import NestedInput from "../../../../../nestedInputs/NestedInput";

interface FormCompProps {
  onSubmit: () => void;
}

const FormComp = ({ onSubmit }: FormCompProps) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string().required("Phone is required"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const methods = useForm(formOptions);

  console.log(methods.formState);
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
          <NestedInput type="text" name="name" placeholder="Enter your name" />
          {methods.formState.errors?.name && (
            <Typography className="error-text">
              <span className="dash">*</span>
              {methods.formState.errors?.name?.message}
            </Typography>
          )}
        </div>
        <div className="input-container">
          <NestedInput
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          {methods.formState.errors?.name && (
            <Typography className="error-text">
              <span className="dash">*</span>
              {methods.formState.errors?.email?.message}
            </Typography>
          )}
        </div>
        <div className="input-container">
          <Controller
            control={methods.control}
            name="phone"
            render={({ field: { ref, ...field } }) => (
              <PhoneInput
                {...field}
                buttonClass="btn-phone"
                containerClass="container"
                searchClass="search-phone"
                inputClass="in"
                dropdownClass="drop"
                placeholder="Enter phone number"
                data-testid="phone"
                inputProps={{
                  ref,
                }}
              />
            )}
          />
          {methods.formState.errors?.phone && (
            <Typography className="error-text">
              <span className="dash">*</span>
              {methods.formState.errors?.phone?.message}
            </Typography>
          )}
        </div>
        <button
          data-testid="button"
          type="submit"
          className="orange-button-container"
        >
          GET A FREE 3 DAYS PASS
        </button>
      </form>
    </FormProvider>
  );
};

export default FormComp;
