import React, { useEffect } from "react";
import PropTypes from "prop-types";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = (props) => {
  const colors = ["Blue", "Black", "Green", "Red", "White"];

  const { debug, errors, pending, register, resetForm, onSubmit } = useForm(
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
          <select {...register("color")} multiple={props.multiple}>
            <option value="">Choose a color</option>
            {
              colors.map(
                (color) => {
                  return (
                    <option
                      key={color}
                      value={color.toLowerCase()}
                    >
                      {color}
                    </option>
                  );
                }
              )
            }
          </select>
        </label>
        {
          errors?.color &&
            <div className="field-error">{errors.color}</div>
        }
      </div>
      <div className="form-buttons">
      <button type="reset" onClick={resetForm}>
          Clean
        </button>
        <button disabled={errors || pending}>
          Send
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  multiple: PropTypes.bool,
};

export default {
  title: "useForm",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const FormWithSelect = Template.bind({});
FormWithSelect.args = {
  multiple: false,
};
