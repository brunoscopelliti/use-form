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
 * @name logFormat
 * @param {*} formState
 * @param {null|Record<string, string>} errors
 * @returns {string}
 */
const logFormat =
  (formState, errors) => {
    const serializedState = {};
    for (const k in formState) {
      if (hasOwn.call(formState, k)) {
        serializedState[k] = { value: formState[k].value };
        if (errors?.[k]) {
          serializedState[k].error = errors?.[k];
        }
      }
    }
    return JSON.stringify(serializedState, null, 2);
  };

/**
 * @name useForm
 * @param {import("./index").FormConfig} formConfig
 */
const useForm =
  (formConfig) => {
    const [pending, reqStart, reqEnd] = useBool();

    const [formState, setFormState] = useState(formConfig);

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
     * @todo Complete implementation.
     * @private
     * @name resetFieldsValue
     * @param {string[]} names
     * @returns {void}
     */
    const resetFieldsValue =
      (names) => {
        /**
         * @type {import("./index").FormConfig}
         */
        let nextState = { ...formState };

        for (const name of names) {
          nextState = {
            ...nextState,
            [name]: {
              ...nextState[name],
              /**
               * TODO:
               * This might need to change to better accomodate
               * checkbox (cause those can have more than one value).
               * ... or also consider default value (if/when implemented).
               */
              value: "",
            },
          };
        }

        setFormState(nextState);
      };

    const [formErrors, setFormErrors] = useState(null);

    /**
     * @private
     * @name setError
     * @param {string} name
     * @param {string} error
     * @returns {void}
     */
    const setError =
      (name, error) => {
        setFormErrors(
          formErrors == null
            ? { [name]: error }
            : { ...formErrors, [name]: error }
        );
      };

    /**
     * Remove the error,
     * from one, or many fields.
     * @private
     * @name resetErrors
     * @param {string[]} names
     * @returns {void}
     */
    const resetErrors =
      (names) => {
        if (formErrors == null) {
          return;
        }

        const errors = {};
        for (const k in formErrors) {
          if (hasOwn.call(formErrors, k)) {
            if (names.includes(k)) {
              continue;
            }

            errors[k] = formErrors[k];
          }
        }

        const isValid = Object.keys(errors).length === 0;

        setFormErrors(
          isValid === false
            ? errors
            : null
        );
      };

    /**
     * @todo
     * @public
     * @name onBlur
     * @param {import("react").FocusEvent<import("./index").FieldElement>} event
     */
    const onBlur =
      (event) => {
        /**
         * TODO: Handle radio, checkbox
         */

        const name = event.target.name;

        const error = validate(name, formState[name], serialize(formState));

        if (error) {
          setError(name, error);
        } else {
          resetErrors([name]);
        }
      };

    /**
     * @todo
     * @public
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
     * @public
     * @name register
     * @param {string} name
     * @param {Record<string, string>} [attrs]
     * @returns {import("./index").FieldAttributes}
     */
    const register =
      (name, attrs = {}) => {
        if (attrs.type === "radio" || attrs.type === "checkbox") {
          if (!attrs.value) {
            throw new Error(`Value is mandatory for radio, and checkbox. Missing value for input named ${name}.`);
          }
        }

        return {
          ...attrs,
          // checked, todo: only when type is radio, or checkbox
          name,
          onBlur,
          onChange,
          type: attrs.type || "text",
          /**
           * TODO:
           * Add possibility to have default value;
           * Default value is different than initial value.
           * Default value is the value the input gets
           * when user clear its content.
           */
          /**
           * `attrs.value` must be set for radio, and checkbox.
           * `formState[name].value` may be of type `string[]`
           * only for type radio, and checkbox.
           * So it's safe to assign value as we do below.
           * @ts-ignore */
          value: attrs.value || formState[name].value || "",
        };
      };

    /**
     * Reset the state of one (or many) form field that
     * becomes unnecessary.
     * @public
     * @name unregister
     * @param {string|string[]} names
     * @returns {void}
     */
    const unregister =
      (names) => {
        if (typeof names == "string") {
          unregister([names]);
          return;
        }

        resetErrors(names);

        resetFieldsValue(names);
      };

    /**
     * @todo
     * @public
     * @name getFieldValue
     * @param {string} name
     * @returns {import("./index").FieldValue}
     */
    const getFieldValue =
      (name) => {
        return formState[name].value;
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
     * @public
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

    /**
     * @todo
     * @public
     * @name reset
     */
    const reset =
      () => {
        throw new Error("Not implemented.");
        // TODO
        // Maybe resetFields(Object.keys(formState)); same for errors
      };

    /**
     * @public
     * @name debug
     */
    const debug =
      () => {
        console.log("--- form state");
        console.log(logFormat(formState, formErrors));
        console.log("---");
      };

    return {
      debug,
      errors: formErrors,
      register,
      reset,
      getFieldValue,
      onSubmit,
      pending,
      unregister,
    };
  };

export default useForm;
