import React, { useRef } from "react";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Select from "../atoms/Select";
import DepartmentsHook from "../hooks/departments.hook";
import { Departments } from "/enums/departments.enum";

const AddExtraItemForm = ({
  onSubmit,
}: {
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const { departments } = DepartmentsHook();
  const productRef = useRef();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      product: "",
      quantity: 1,
      category: Departments.OTHER,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="product"
        control={control}
        render={({ field }) => (
          <Input placeholder="Product" {...field} ref={productRef} />
        )}
      />

      <div className="flex flex-col sm:flex-row">
        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <Input
              className="mr-2 sm:w-1/3"
              placeholder="Quantity"
              type="number"
              {...field}
              onChange={(value) => {
                const _value = (value.target as any).value;
                field.onChange(Number(_value));
              }}
            />
          )}
        />

        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              className="flex-1"
              placeholder="Type "
              options={departments.map(
                ({ title: { en: label }, department: value }) => ({
                  value,
                  label: label || "",
                })
              )}
              {...field}
            />
          )}
        />
      </div>

      <div className="w-full flex justify-end">
        <Button type="submit">Add to list</Button>
      </div>
    </form>
  );
};

export default AddExtraItemForm;
