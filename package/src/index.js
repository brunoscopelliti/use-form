import { useState } from "react";

import useBool from "@bscop/use-bool";

const hasOwn = {}.hasOwnProperty;

/**
 * @name serialize
 * @param {*} formState
 * @returns {Record<string, import("./index").FieldValue>}
 */
const serialize =
  (formState) => {
    /**
     * @type Record<string, import("./index").FieldValue>
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
    const [formState, setFormState] = useState(formConfig);

    const [pending, reqStart, reqEnd] = useBool();

    const onBlur =
      (event) => {
        // TODO
      };

    const onChange =
      (event) => {
        // TODO
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

            // TODO validation;

            reqStart();

            send(payload).finally(reqEnd);
          };

        return onSubmit_;
      };

    return {
      getFieldAttributes,
      onSubmit,
      pending,
    };
  };

export default useForm;
