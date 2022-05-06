import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { OptionProps } from "../../utils/htmlelEmentTypes/option";
import { useForm, UseFormReturn, FieldValues } from "react-hook-form";

interface SelectProps {
  options: OptionProps[];
  name: string;
  methods: UseFormReturn<FieldValues, any>;
}

const Select = ({ name, options, methods }: SelectProps) => {
  return (
    <div className="select-container">
      <label htmlFor={name}>{name.toUpperCase()}</label>
      <select
        {...methods.register(name)}
        required
        data-testid="select"
        /*  name={name} */
        className="select"
      >
        {options.map((item) => (
          <option value={item.value} key={item.value}>
            {item.text.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
