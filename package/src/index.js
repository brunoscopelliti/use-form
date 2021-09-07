import { useState } from "react";

import useBool from "@bscop/use-bool";

import validate from "./validate";

const hasOwn = {}.hasOwnProperty;

/**
 * @name serialize
 * @param {*} formState
 * @returns {import("./index").FormPayload}
 */
const serialize =
  (formState) => {
    /**
     * @type import("./index").FormPayload
     */
    const serializedState = {};
    for (const k in formState) {
      if (hasOwn.call(formState, k)) {
        serializedState[k] = formState[k].value;
      }
    }
    return serializedState;
  };

/**
 * @name useForm
 * @param {import("./index").FormConfig} formConfig
 */
const useForm =
  (formConfig) => {
    const [pending, reqStart, reqEnd] = useBool();

    const [formState, setFormState] = useState(formConfig);

    const [formErrors, setFormErrors] = useState(null);

    /**
     * @private
     * @name setFieldValue
     * @param {string} name
     * @param {import("./index").FieldValue} value
     * @return {void}
     */
    const setFieldValue =
      (name, value) => {
        setFormState(
          {
            ...formState,
            [name]: {
              ...formState[name],
              value: value,
            },
          }
        );
      };

    /**
     * @name onBlur
     * @param {import("react").FocusEvent<import("./index").FieldElement>} event
     */
    const onBlur =
      (event) => {
        // TODO
        // const error = validate(k, formState[k], payload);
      };

    /**
     * @name onChange
     * @param {import("react").ChangeEvent<import("./index").FieldElement>} event
     */
    const onChange =
      (event) => {
        const input = event.target;

        /**
         * TODO: Handle radio, checkbox
         */

        setFieldValue(input.name, input.value);
      };

    /**
     * @name getFieldAttributes
     * @param {string} name
     * @returns {import("./index").FieldAttributes}
     */
    const getFieldAttributes =
      (name) => {
        return {
          name,
          onBlur,
          onChange,
        };
      };

    /**
     * @private
     * @name validateForm
     * @params {import("./index").FormPayload} payload
     * @returns {boolean}
     */
    const validateForm =
      (payload) => {
        let isValid = true;
        const errors = {};

        for (const k in formState) {
          if (hasOwn.call(formState, k)) {
            const error = validate(k, formState[k], payload);

            if (error) {
              errors[k] = error;
              isValid = false;
            }
          }
        }

        setFormErrors(
          isValid === false
            ? errors
            : null
        );

        return isValid;
      };

    /**
     * @name onSubmit
     * @param {import("./index").RequestSender} send
     * @returns {import("./index").SubmitHandler}
     */
    const onSubmit =
      (send) => {
        const onSubmit_ =
          (event) => {
            event.preventDefault();

            const payload = serialize(formState);

            const isValid = validateForm(payload);

            if (isValid === false) {
              return;
            }

            reqStart();

            send(payload).finally(reqEnd);
          };

        return onSubmit_;
      };

    return {
      errors: formErrors,
      getFieldAttributes,
      onSubmit,
      pending,
    };
  };

export default useForm;
