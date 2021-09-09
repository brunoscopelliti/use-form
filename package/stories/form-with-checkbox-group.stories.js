import React, { useEffect } from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const { debug, errors, register, pending, onSubmit } = useForm(
    {
      sports: {
        label: "Sports",
        schema: [
          {
            id: "required",
            message: "Choosing at least a sport is mandatory.",
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
        <legend>
          Selects all the sports you like:
        </legend>
        <div className="checkbox-group">
          <label>
            <input {...register("sports", { type: "checkbox", value: "soccer" })} />
            Soccer
          </label>
          <label>
            <input {...register("sports", { type: "checkbox", value: "basket" })} />
            Basketball
          </label>
          <label>
            <input {...register("sports", { type: "checkbox", value: "volley" })} />
            Volley
          </label>
        </div>
        {
          errors?.sports &&
            <div className="field-error">{errors.sports}</div>
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

export const FormWithCheckboxes = Template.bind({});
