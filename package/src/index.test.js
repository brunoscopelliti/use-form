import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useForm from "./";

describe("useForm", () => {
  describe("simple form", () => {
    const SimpleForm =
      (props) => {
        const { errors, pending, register, onSubmit } = useForm(
          {
            username: {
              label: "Username",
              schema: [
                {
                  id: "required",
                },
              ],
              value: props.username || "",
            },
          }
        );

        return (
          <form onSubmit={onSubmit(props.onSubmit)}>
            <div className="form-group">
              <label>
                Username:
                <input
                  data-testid="username"
                  type="text"
                  {...register("username")}
                />
              </label>
              {
                errors?.username &&
                  <div data-testid="username-error" className="field-error">{errors.username}</div>
              }
            </div>
            <div className="form-group">
              <label>
                I use this input field only to have something
                reliable I can programatically `.focus()`, so that
                blur event is triggered on the field under test.
                <input type="text" data-testid="focusme" />
              </label>
            </div>
            <div className="form-buttons">
              <button disabled={Boolean(errors || pending)}>
                Send
              </button>
            </div>
          </form>
        );
      };

    SimpleForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      username: PropTypes.string,
    };

    it("checks test form", () => {
      render(<SimpleForm onSubmit={jest.fn()} />);

      const input = screen.getByTestId("username");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("value", "");

      expect(screen.queryByTestId("username-error")).not.toBeInTheDocument();

      const submitButton = screen.getByRole("button");

      expect(submitButton).toBeInTheDocument();
      expect(submitButton).toHaveTextContent("Send");
    });

    it("checks test form / field has initial value", () => {
      render(<SimpleForm onSubmit={jest.fn()} username="luffy" />);

      const input = screen.getByTestId("username");

      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("value", "luffy");
    });

    it("controls simple form", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SimpleForm onSubmit={spySubmit} />);

      const input = screen.getByTestId("username");

      expect(input).toHaveAttribute("value", "");

      userEvent.type(input, "luffy");

      expect(input).toHaveAttribute("value", "luffy");

      expect(screen.queryByTestId("username-error")).not.toBeInTheDocument();

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ username: "luffy" });
    });

    it("validates form before submit", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SimpleForm onSubmit={spySubmit} />);

      let error = screen.queryByTestId("username-error");

      expect(error).not.toBeInTheDocument();

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      error = screen.queryByTestId("username-error");

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent("Field \"Username\" is mandatory.");

      expect(spySubmit).not.toHaveBeenCalled();
    });

    it("validates field after it loses focus", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SimpleForm onSubmit={spySubmit} />);

      const input = screen.getByTestId("username");

      expect(input).toHaveAttribute("value", "");

      userEvent.type(input, "luffy");

      expect(input).toHaveAttribute("value", "luffy");

      expect(screen.queryByTestId("username-error")).not.toBeInTheDocument();

      userEvent.clear(input);

      expect(input).toHaveAttribute("value", "");

      const otherInput = screen.getByTestId("focusme");

      otherInput.focus();

      const error = screen.getByTestId("username-error");

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent("Field \"Username\" is mandatory.");

      const submitButton = screen.getByRole("button");

      expect(submitButton).toHaveAttribute("disabled", "");

      userEvent.type(input, "luffy");

      expect(input).toHaveAttribute("value", "luffy");

      otherInput.focus();

      expect(screen.queryByTestId("username-error")).not.toBeInTheDocument();

      expect(submitButton).not.toHaveAttribute("disabled", "");
    });

    it("validates field with inline rule", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      const spyValidate = jest.fn().mockImplementation(() => "Inline error");

      const Form =
        () => {
          const { errors, pending, register, onSubmit } = useForm(
            {
              username: {
                label: "Username",
                schema: [
                  {
                    id: "inline",
                    validate: spyValidate,
                  },
                ],
              },
            }
          );

          return (
            <form onSubmit={onSubmit(spySubmit)}>
              <div className="form-group">
                <label>
                  Username:
                  <input
                    data-testid="username"
                    type="text"
                    {...register("username")}
                  />
                </label>
                {
                  errors?.username &&
                    <div data-testid="username-error" className="field-error">{errors.username}</div>
                }
              </div>
              <div className="form-group">
                <label>
                  I use this input field only to have something
                  reliable I can programatically `.focus()`, so that
                  blur event is triggered on the field under test.
                  <input type="text" data-testid="focusme" />
                </label>
              </div>
              <div className="form-buttons">
                <button disabled={Boolean(errors || pending)}>
                  Send
                </button>
              </div>
            </form>
          );
        };

      render(
        <Form />
      );

      const input = screen.getByTestId("username");

      expect(input).toHaveAttribute("value", "");

      userEvent.type(input, "luffy");

      expect(input).toHaveAttribute("value", "luffy");

      const otherInput = screen.getByTestId("focusme");

      otherInput.focus();

      expect(spyValidate).toHaveBeenCalledTimes(1);
      expect(spyValidate).toHaveBeenCalledWith(
        "username",
        "Username",
        "luffy",
        {
          id: "inline",
          validate: expect.anything(),
        },
        {
          username: "luffy",
        }
      );

      const error = screen.getByTestId("username-error");

      expect(error).toBeInTheDocument();
      expect(error).toHaveTextContent("Inline error");
    });

    it("reset form", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      const Form =
        () => {
          const { errors, pending, register, resetForm, onSubmit } = useForm(
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
            <form onSubmit={onSubmit(spySubmit)}>
              <div className="form-group">
                <label>
                  Username:
                  <input
                    data-testid="username"
                    type="text"
                    {...register("username")}
                  />
                </label>
                {
                  errors?.username &&
                    <div data-testid="username-error" className="field-error">{errors.username}</div>
                }
              </div>
              <div className="form-group">
                <label>
                  I use this input field only to have something
                  reliable I can programatically `.focus()`, so that
                  blur event is triggered on the field under test.
                  <input type="text" data-testid="focusme" />
                </label>
              </div>
              <div className="form-buttons">
                <button type="reset" onClick={resetForm}>
                  Clean
                </button>
                <button disabled={Boolean(errors || pending)}>
                  Send
                </button>
              </div>
            </form>
          );
        };

      render(
        <Form />
      );

      const input = screen.getByTestId("username");

      expect(input).toHaveAttribute("value", "");

      userEvent.type(input, "luffy");

      expect(input).toHaveAttribute("value", "luffy");

      const buttons = screen.getAllByRole("button");

      const resetButton = buttons[0];

      expect(resetButton).toHaveAttribute("type", "reset");

      userEvent.click(resetButton);

      expect(input).toHaveAttribute("value", "");
    });
  });

  describe("dynamic form", () => {
    const DynamicForm = (props) => {
      const { errors, register, valueOf, pending, onSubmit, unregister } = useForm(
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
        <form onSubmit={onSubmit(props.onSubmit)}>
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
                <div className="form-group" data-testid="classic-section">
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
              <div className="form-group" data-testid="token-section">
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
            <button disabled={Boolean(errors || pending)}>
              Send
            </button>
          </div>
        </form>
      );
    };

    DynamicForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };

    it("controls dynamic fields", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<DynamicForm onSubmit={spySubmit} />);

      expect(screen.queryByTestId("classic-section")).not.toBeInTheDocument();
      expect(screen.queryByTestId("token-section")).not.toBeInTheDocument();

      userEvent.click(screen.getByLabelText("Classic (email/password)"));

      const section1 = screen.getByTestId("classic-section");

      expect(section1).toBeInTheDocument();

      const email = section1.querySelector("input[name='email']");

      userEvent.type(email, "luffy@strawhat.com");

      userEvent.click(screen.getByLabelText("Token"));

      const section2 = screen.getByTestId("token-section");

      expect(section2).toBeInTheDocument();

      const phone = section2.querySelector("input[name='phone']");

      userEvent.type(phone, "123456");

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ phone: "123456", type: "token" });
    });
  });

  describe("dynamic form / 2", () => {
    const OPTIONS = ["Black", "Blue", "Green", "Red", "White"];

    const DynamicForm = (props) => {
      const options = props.options;

      const { errors, forceValue, pending, register, onSubmit } = useForm(
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

      return (
        <form onSubmit={onSubmit(props.onSubmit)}>
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
            <button disabled={Boolean(errors || pending)}>
              Send
            </button>
          </div>
        </form>
      );
    };

    DynamicForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    it("controls field that changes tag", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      const { rerender } = render(
        <DynamicForm onSubmit={spySubmit} options={OPTIONS} />
      );

      const select = screen.getByRole("combobox");

      const options = screen.getAllByRole("option");

      expect(options).toHaveLength(6);

      userEvent.selectOptions(select, ["Red"]);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "Red" });
      spySubmit.mockClear();

      rerender(
        <DynamicForm onSubmit={spySubmit} options={OPTIONS.slice(0, 1)} />
      );

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "Black" });
    });
  });

  describe("checkbox", () => {
    const CheckboxForm = (props) => {
      const { errors, pending, register, onSubmit } = useForm(
        {
          sports: {
            label: "Sports",
            schema: [
              {
                id: "required",
                message: "Choosing at least a sport is mandatory.",
              },
            ],
            ...(
              props.values
                ? {
                    value: props.values,
                  }
                : null
            ),
          },
        }
      );

      return (
        <form onSubmit={onSubmit(props.onSubmit)}>
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
                <div data-testid="error" className="field-error">{errors.sports}</div>
            }
          </div>
          <div className="form-buttons">
            <button disabled={Boolean(errors || pending)}>
              Send
            </button>
          </div>
        </form>
      );
    };

    CheckboxForm.propTypes = {
      onSubmit: PropTypes.func.isRequired,
      values: PropTypes.array,
    };

    it("submits list of values", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<CheckboxForm onSubmit={spySubmit} />);

      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes).toHaveLength(3);

      for (const cb of checkboxes) {
        // @ts-ignore
        expect(cb.checked).toBe(false);
      }

      userEvent.click(checkboxes[2]);

      // @ts-ignore
      expect(checkboxes[2].checked).toBe(true);

      userEvent.click(checkboxes[1]);

      // @ts-ignore
      expect(checkboxes[1].checked).toBe(true);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ sports: ["volley", "basket"] });
      spySubmit.mockClear();

      userEvent.click(checkboxes[0]);
      userEvent.click(checkboxes[1]);
      userEvent.click(checkboxes[2]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ sports: ["soccer"] });
      spySubmit.mockClear();

      userEvent.click(checkboxes[0]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).not.toHaveBeenCalled();

      expect(screen.getByTestId("error"))
        .toHaveTextContent("Choosing at least a sport is mandatory.");

      userEvent.click(checkboxes[0]);
      userEvent.click(checkboxes[2]);
      userEvent.click(checkboxes[1]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(screen.queryByTestId("error")).not.toBeInTheDocument();

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ sports: ["soccer", "volley", "basket"] });
    });

    it("submits default values", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<CheckboxForm onSubmit={spySubmit} values={["soccer"]} />);

      const checkboxes = screen.getAllByRole("checkbox");

      expect(checkboxes).toHaveLength(3);

      // @ts-ignore
      expect(checkboxes[0].checked).toBe(true);
      // @ts-ignore
      expect(checkboxes[1].checked).toBe(false);
      // @ts-ignore
      expect(checkboxes[2].checked).toBe(false);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ sports: ["soccer"] });
    });
  });

  describe("select", () => {
    const SelectForm = (props) => {
      const colors = ["Blue", "Black", "Green", "Red", "White"];

      const { errors, pending, register, onSubmit } = useForm(
        {
          color: {
            label: "Color",
            schema: [
              {
                id: "required",
              },
            ],
            value: props.value,
          },
        }
      );

      return (
        <form onSubmit={onSubmit(props.onSubmit)}>
          <div className="form-group">
            <label>
              Colors:
              <select {...register("color", { multiple: props.multiple })}>
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
                <div data-testid="error" className="field-error">{errors.color}</div>
            }
          </div>
          <div className="form-buttons">
            <button disabled={Boolean(errors || pending)}>
              Send
            </button>
          </div>
        </form>
      );
    };

    SelectForm.propTypes = {
      multiple: PropTypes.bool,
      onSubmit: PropTypes.func.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
      ]),
    };

    it("submits single value", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SelectForm onSubmit={spySubmit} />);

      const select = screen.getByRole("combobox");

      const options = screen.getAllByRole("option");

      expect(options).toHaveLength(6);

      userEvent.selectOptions(select, ["black"]);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "black" });
      spySubmit.mockClear();

      userEvent.selectOptions(select, ["red"]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "red" });
      spySubmit.mockClear();

      userEvent.selectOptions(select, [""]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).not.toHaveBeenCalled();

      expect(screen.getByTestId("error"))
        .toHaveTextContent("Field \"Color\" is mandatory.");

      userEvent.selectOptions(select, ["green"]);
      userEvent.tab();

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(screen.queryByTestId("error")).not.toBeInTheDocument();

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "green" });
    });

    it("submits default sinlge value", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SelectForm onSubmit={spySubmit} value="white" />);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: "white" });
    });

    it("submits list of values", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SelectForm multiple onSubmit={spySubmit} />);

      const select = screen.getByRole("listbox");

      const options = screen.getAllByRole("option");

      expect(options).toHaveLength(6);

      userEvent.selectOptions(select, ["black", "white"]);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: ["black", "white"] });
      spySubmit.mockClear();

      userEvent.deselectOptions(select, ["black", "white"]);
      userEvent.selectOptions(select, ["red"]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: ["red"] });
      spySubmit.mockClear();

      userEvent.deselectOptions(select, ["red"]);

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).not.toHaveBeenCalled();

      expect(screen.getByTestId("error"))
        .toHaveTextContent("Field \"Color\" is mandatory.");

      userEvent.selectOptions(select, ["red", "green", "blue"]);
      userEvent.tab();

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(screen.queryByTestId("error")).not.toBeInTheDocument();

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: ["blue", "green", "red"] });
    });

    it("submits default values", async () => {
      const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

      render(<SelectForm multiple onSubmit={spySubmit} value={["blue", "red"]} />);

      const submitButton = screen.getByRole("button");

      await act(
        async () => {
          userEvent.click(submitButton);
        }
      );

      expect(spySubmit).toHaveBeenCalledTimes(1);
      expect(spySubmit).toHaveBeenCalledWith({ color: ["blue", "red"] });
    });
  });
});
