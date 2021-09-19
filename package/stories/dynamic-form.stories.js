import React, { useEffect } from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const { debug, errors, pending, register, reset, onSubmit, valueOf, unregister } = useForm(
    {
      type: {
        label: "Login type",
        schema: [
          {
            id: "required",
          },
        ],
      },
      email: {
        label: "Email",
        schema: [
          {
            id: "required",
            condition (state) {
              return state.type === "classic";
            },
          },
        ],
      },
      password: {
        label: "Password",
        schema: [
          {
            id: "required",
            condition (state) {
              return state.type === "classic";
            },
          },
        ],
      },
      phone: {
        label: "Phone number",
        schema: [
          {
            id: "required",
            condition (state) {
              return state.type === "token";
            },
          },
        ],
      },
    }
  );

  useEffect(debug);

  const currentType = valueOf("type");

  useEffect(
    () => {
      if (currentType === "classic") {
        unregister("phone");
      }
      if (currentType === "token") {
        unregister(["email", "password"]);
      }
    },
    [currentType] // eslint-disable-line react-hooks/exhaustive-deps
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
      <div className="form-title">
        Fill the form
      </div>
      <div className="form-group">
        <p className="comment">
          Choosing one of the options below
          will trigger the form content to change.
        </p>
        <legend>
          Choose how you want to login
        </legend>
        <div className="radio-group">
          <label>
            <input {...register("type", { type: "radio", value: "classic" })} />
            Classic (email/password)
          </label>
          <label>
            <input {...register("type", { type: "radio", value: "token" })} />
            Token
          </label>
        </div>
        {
          errors?.type &&
            <div className="field-error">{errors.type}</div>
        }
      </div>
      {
        currentType === "classic" && (
          <>
            <div className="form-group">
              <label>
                Email:
                <input {...register("email", { type: "email" })} />
              </label>
              {
                errors?.email &&
                  <div className="field-error">{errors.email}</div>
              }
            </div>
            <div className="form-group">
              <label>
                Password:
                <input {...register("password", { type: "password" })} />
              </label>
              {
                errors?.password &&
                  <div className="field-error">{errors.password}</div>
              }
            </div>
          </>
        )
      }
      {
        currentType === "token" && (
          <div className="form-group">
            <label>
              Phone:
              <input {...register("phone")} />
            </label>
            {
              errors?.phone &&
                <div className="field-error">{errors.phone}</div>
            }
          </div>
        )
      }
      <div className="form-buttons">
        <button type="reset" onClick={reset}>
          Clean
        </button>
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

export const DynamicForm = Template.bind({});
