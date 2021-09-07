import React from "react";
import PropTypes from "prop-types";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import useForm from "./";

describe("useForm", () => {
  const SimpleForm =
    (props) => {
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
        <form onSubmit={onSubmit(props.onSubmit)}>
          <div className="form-group">
            <label>
              Username:
              <input
                data-testid="username"
                type="text"
                {...getFieldAttributes("username")}
              />
            </label>
            {
              errors?.username &&
                <div data-testid="username-error" className="field-error">{errors.username}</div>
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

  SimpleForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  it("checks test form", () => {
    render(<SimpleForm onSubmit={jest.fn()} />);

    const input = screen.getByTestId("username");

    expect(input).toBeInTheDocument();
    // @ts-ignore
    expect(input.value).toBe("");

    expect(screen.queryByTestId("username-error")).not.toBeInTheDocument();

    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Send");
  });

  it("controls simple form", async () => {
    const spySubmit = jest.fn().mockImplementation(() => Promise.resolve());

    render(<SimpleForm onSubmit={spySubmit} />);

    const input = screen.getByTestId("username");

    // @ts-ignore
    expect(input.value).toBe("");

    userEvent.type(input, "luffy");

    // @ts-ignore
    expect(input.value).toBe("luffy");

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
    expect(error).toHaveTextContent("The field is mandatory.");

    expect(spySubmit).not.toHaveBeenCalled();
  });
});
