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
      /* istanbul ignore else */
      if (hasOwn.call(formState, k)) {
        /**
         * We include in the payload only
         * the fields which contain a not empty value.
         */
        const value = formState[k].value;
        if (value?.length > 0) {
          serializedState[k] = value;
        }
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
/* istanbul ignore next */
const logFormat =
  (formState, errors) => {
    const serializedState = {};
    for (const k in formState) {
      /* istanbul ignore else */
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
     * @return {import("./index").FormConfig}
     */
    const setFieldValue =
      (name, value) => {
        const nextState = {
          ...formState,
          [name]: {
            ...formState[name],
            value: value,
          },
        };

        setFormState(nextState);

        return nextState;
      };

    /**
     * @private
     * @name resetFieldsValue
     * @param {string[]} names
     * @returns {import("./index").FormConfig}
     */
    const resetFieldsValue =
      (names) => {
        /**
         * @type {import("./index").FormConfig}
         */
        let nextState = { ...formState };

        for (const name of names) {
          /**
           * It makes sense to reset only
           * fields that contains an actual value.
           */
          if (nextState[name].value) {
            nextState = {
              ...nextState,
              [name]: {
                ...nextState[name],
                value: Array.isArray(nextState[name].value)
                  ? []
                  : "",
              },
            };
          }
        }

        setFormState(nextState);

        return nextState;
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
          { ...formErrors, [name]: error }
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

        let isValid = true;
        const errors = {};
        for (const k in formErrors) {
          /* istanbul ignore else */
          if (hasOwn.call(formErrors, k)) {
            if (names.includes(k)) {
              continue;
            }

            errors[k] = formErrors[k];
            isValid = false;
          }
        }

        setFormErrors(
          isValid === false
            ? errors
            : null
        );
      };

    /**
     * @private
     * @name toggleError
     * @params {string} name
     * @params {string|undefined} error
     * @returns {void}
     */
    const toggleError =
     (name, error) => {
       if (error) {
         setError(name, error);
       } else {
         resetErrors([name]);
       }
     };

    /**
     * @public
     * @name onBlur
     * @param {import("react").FocusEvent<import("./index").FieldElement>} event
     */
    const onBlur =
      (event) => {
        const name = event.target.name;

        const error = validate(name, formState[name], serialize(formState));

        toggleError(name, error);
      };

    /**
     * @private
     * @name toggleValue
     * @param {string} name
     * @param {string} value
     * @returns {string[]}
     */
    const toggleValue =
      (name, value) => {
        /**
         * In this particular case,
         * it's safe to assume `formState[name].value` is always `string[]`,
         * and so it is `values`.
         * @type string[]
         * @ts-ignore */
        const values = formState[name].value || [];

        const at = values.findIndex(
          (el) => {
            return el === value;
          }
        );

        if (at < 0) {
          return values.concat(value);
        }

        const nextValues = values.slice();
        nextValues.splice(at, 1);
        return nextValues;
      };

    /**
     * @private
     * @name getSelectMultipleValues
     * @param {HTMLSelectElement} select
     * @returns {string[]}
     */
    const getSelectMultipleValues =
      (select) => {
        const options = select.selectedOptions;
        const values = [];
        for (let i = 0; i < options.length; i++) {
          const value = options[i].value;
          if (value) {
            values.push(value);
          }
        }
        return values;
      };

    /**
     * @public
     * @name onChange
     * @param {import("react").ChangeEvent<import("./index").FieldElement>} event
     */
    const onChange =
      (event) => {
        const input = event.target;
        const { name, type } = input;

        /**
         * @type {import("./index").FieldValue}
         */
        let value = input.value;

        if (type === "checkbox") {
          value = toggleValue(name, value);
        }

        if (input instanceof HTMLSelectElement && input.multiple) {
          value = getSelectMultipleValues(input);
        }

        setFieldValue(name, value);
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
        const checkable = attrs.type === "radio" || attrs.type === "checkbox";
        if (checkable) {
          if (!attrs.value) {
            throw new Error(`Value is mandatory for radio, and checkbox. Missing value for input named ${name}.`);
          }
        }

        return {
          ...attrs,
          ...(
            checkable
              ? {
                  checked: (formState[name].value || []).includes(attrs.value),
                }
              : null
          ),
          name,
          onBlur,
          onChange,
          value:
            attrs.value ||
            formState[name].value ||
            (
              attrs.multiple
                ? []
                : ""
            ),
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
     * @public
     * @name valueOf
     * @param {string} name
     * @returns {import("./index").FieldValue}
     */
    const valueOf =
      (name) => {
        return formState[name].value;
      };

    /**
     * @public
     * @name forceValue
     * @param {string} name
     * @param {import("./index").FieldValue} value
     */
    const forceValue =
      (name, value) => {
        const nextState = setFieldValue(name, value);

        const error = validate(name, nextState[name], serialize(nextState));

        /**
         * When next state for the field is valid,
         * we remove the error immediately.
         */
        if (error == null) {
          resetErrors([name]);
        }
      };

    /**
     * @private
     * @name validateForm
     * @param {import("./index").FormPayload} payload
     * @returns {boolean}
     */
    const validateForm =
      (payload) => {
        let isValid = true;
        const errors = {};

        for (const k in formState) {
          /* istanbul ignore else */
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
     * Reset the value of all fields,
     * and remove validation errors.
     * @public
     * @name resetForm
     */
    const resetForm =
      () => {
        resetFieldsValue(
          Object.keys(formState)
        );

        setFormErrors(null);
      };

    /**
     * @public
     * @name debug
     */
    /* istanbul ignore next */
    const debug =
      () => {
        console.log("--- form state");
        console.log(logFormat(formState, formErrors));
        console.log("---");
      };

    return {
      debug,
      errors: formErrors,
      forceValue,
      register,
      resetForm,
      valueOf,
      onSubmit,
      pending,
      unregister,
    };
  };

export default useForm;
