import React from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const { errors, getFieldAttributes, pending, onSubmit } = useForm(
    {
      username: {
        label: "Username",
        schema: [
          {
            id: "required",
          },
        ],
      },
    }
  );

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
      <div className="form-group">
        <label>
          Username:
          <input type="text" {...getFieldAttributes("username")} />
        </label>
        {
          errors?.username &&
            <div className="field-error">{errors.username}</div>
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

export const SimpleForm = Template.bind({});
