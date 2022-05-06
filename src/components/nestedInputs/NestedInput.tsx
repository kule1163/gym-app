import React from "react";
import {
  useForm,
  FormProvider,
  useFormContext,
  Controller,
} from "react-hook-form";

interface NestedInputProps {
  name: string;
  placeholder: string;
  type: string;
}

const NestedInput = ({ name, placeholder, type }: NestedInputProps) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        className="input"
        data-testid={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default NestedInput;
