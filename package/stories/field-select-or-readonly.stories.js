import React, { useEffect, useState } from "react";

import useForm from "../src";

import delay from "./fixtures/delay";

const Form = () => {
  const OPTIONS = ["Black", "Blue", "Green", "Red", "White"];

  const [options, setOptions] = useState(OPTIONS.slice(0, 1));
  const toggleOptions =
    () => {
      setOptions(
        options.length === 1
          ? OPTIONS
          : OPTIONS.slice(0, 1)
      );
    };

  const { debug, errors, forceValue, pending, register, resetForm, onSubmit } = useForm(
    {
      color: {
        label: "Color",
        schema: [
          {
            id: "required",
          },
        ],
        value: options.length === 1
          ? options[0]
          : "",
      },
    }
  );

  useEffect(
    () => {
      if (options.length === 1) {
        forceValue("color", options[0]);
      } else {
        forceValue("color", "");
      }
    },
    [options] // eslint-disable-line react-hooks/exhaustive-deps
  );

  useEffect(debug);

  return (
    <div>
      <p className="comment">
        The input changes type depending on the number of options.
        It is rendered as readonly field when there iss only one option, otherwise is rendered as select.
        Press the button below to change how the field is rendered.
      </p>
      <p>
        <button onClick={toggleOptions}>Change</button>
      </p>
      <hr/>
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
            {
              options.length === 1
                ? (
                  <input {...register("color", { readOnly: "", value: options[0] })} />
                  )
                : (
                    <select {...register("color")}>
                      <option value="">Choose a color</option>
                      {
                        options.map(
                          (color) => {
                            return (
                              <option
                                key={color}
                                value={color}
                              >
                                {color}
                              </option>
                            );
                          }
                        )
                      }
                    </select>
                  )
            }
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
    </div>
  );
};

export default {
  title: "useForm",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const FieldSelectOrReadonlyInput = Template.bind({});
