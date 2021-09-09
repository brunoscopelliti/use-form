import React, { useEffect } from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const { debug, errors, register, pending, onSubmit } = useForm(
    {
      color: {
        label: "Color",
        schema: [
          {
            id: "required",
            message: "Choosing a color is mandatory.",
          },
        ],
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
          Colors:
          <select {...register("color")}>
            <option value="">Choose a color</option>
            <option value="blue">Blue</option>
            <option value="black">Black</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="white">White</option>
          </select>
        </label>
        {
          errors?.color &&
            <div className="field-error">{errors.color}</div>
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

export const FormWithSelect = Template.bind({});
