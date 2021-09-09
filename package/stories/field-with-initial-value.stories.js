import React, { useEffect } from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const { debug, errors, register, pending, onSubmit } = useForm(
    {
      name: {
        label: "Name",
        schema: [
          {
            id: "required",
          },
        ],
        value: "Bruno",
      },
    }
  );

  useEffect(debug);

  return (
    <form
      onSubmit={
        onSubmit(
          (payload) => {
            console.log("--- payload:");
            console.log(payload);
            console.log("---");
            return delay(2000);
          }
        )
      }
    >
      <div className="form-title">
        Fill the form
      </div>
      <div className="form-group">
        <label>
          Name:
          <input {...register("name")} />
        </label>
        {
          errors?.name &&
            <div className="field-error">{errors.name}</div>
        }
      </div>
      <div className="form-buttons">
        <button disabled={errors || pending}>
          Send
        </button>
      </div>
    </form>
  );
};

export default {
  title: "useForm",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const FieldWithInitialValue = Template.bind({});
