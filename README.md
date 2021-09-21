# @bscop/use-form

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/brunoscopelliti/@bscop/use-form/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@bscop/use-form.svg?style=flat)](https://www.npmjs.com/package/@bscop/use-form)
[![CircleCI Status](https://circleci.com/gh/brunoscopelliti/@bscop/use-form.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/brunoscopelliti/@bscop/use-form)
[![Coverage](https://img.shields.io/codecov/c/github/brunoscopelliti/@bscop/use-form)](https://app.codecov.io/gh/brunoscopelliti/@bscop/use-form/)

A custom React hook handle form.

[View in Storybook](https://brunoscopelliti.github.io/use-form).

## Install

```
npm i @bscop/use-form
```

## Usage

```js
import useForm from "@bscop/use-form";

function App () {
  const { onSubmit, pending, register } = useForm(
    {
      email: {
        label: "Email",
        schema: [
          {
            id: "required",
          },
        ],
      }
    }
  );

  const send = 
    (payload) => {
      fetch("/", { method: "POST", body: JSON.stringify(payload) })
        .then(
          () => {
            // ...
          }
        )
    };

  return (
    <form onSubmit={onSubmit(send)}>
      <div>
        <label>
          Email:
          <input {...register("email", { type: "email" })}/>
        </label>
      </div>
      <button disabled={pending} type="submit">Save</button>
    </form>
  );
}
```

## API

```ts
const {
  debug,
  errors,
  pending,
  onSubmit,
  register,
  resetForm,
  unregister,
  valueOf,
} : HookResult = useForm(config: FormConfig);
```

### FormConfig

When executing `useForm` we pass to an object to configure the form.\
`FormConfig` is an object whose keys correspond to name of inputs present in the form, and values contains the configuration for each field (`Field`).

```ts
const fieldEmailConfig : Field = {
  schema: [
    {
      id: "required",
    },
  ]
};

const fieldPasswordConfig : Field = {
};

const formConfig : FormConfig = {
  email: fieldEmailConfig,
  password: fieldPasswordConfig,
}

useForm(formConfig);
```

Each field may have following configuration properties:

* `label` (`string`) : it's used to reference the field in validation error message.

* `schema` (`[Rule[]]`) : it specifies the rules the field value must respect - more on this subject later.

* `value` (`[string|string[]]`) : it specifies the initial value of the field - it can be a list of values to accomodate for the possibility of checkbox, and select to have multiple value selected at the same time.

#### Validation schema

It's a list of validation the field value must pass in order to be considered valid. Each validation validation rule must have an `id` field that matches the name of a built-in rule.

Built-in rules are:

* required : `{ id: "required" }`.
* max length : `{ id: "maxlen", attrs: { size: number } }`.
* min length : `{ id: "minlen", attrs: { size: number } }`.
* format : `{ id: "format", attrs: { regexp : string} }`.
* range : `{ id: "range", attrs: { range : number[] } }`.
* date : `{ id: "date" }`.
* one of : `{ id: "oneof", attrs: { options : string[] } }`.

Each rule can optionally also specify a message to override the default message; eg.

```js
useForm(
  {
    name: {
      schema: [
        {
          id: "required",
          message: "Did you forget something?",
        },
      ]
    }
  }
)
```

It's also possible to specify a custom validation rule inline; eg.

```ts
useForm(
  {
    name: {
      schema: [
        {
          validate (
            name : string,
            label : string,
            value : string|string[],
            rule : Rule,
            formState : unknown
          ) : undefined|string {
            /**
             * Returns undefined when field value is valid;
             * otherwise return a string describing the error.
             * This string is meant to be rendered as validation error
             * below the field.
             */
            const isValid = computeIsValid(value);

            if (isValid) {
              return undefined;
            }

            return "The value is not valid.";
          }
        }
      ]
    }
  }
)
```

### HookResult

`useForm` returns an object with the following properties:

* `debug` (`() => void`) : print the state of the form.

* `errors` (`null | Record<keyof FormConfig, string>`) : contains validation error for each field in the form; it's `null` if the form is valid (or validation didn't run yet).

* `valueOf` (`(name : string) => string|string[]`) : return the value of a given field; for checkbox, and select[multiple] it returns a list of values.

* `pending` (`boolean`) : it is true if the submit is in progress - it is recommended to use it to mark the submit button as disabled.

* `onSubmit` (`(handler : Record<keyof FormConfig, string>) => (event : React.FormEvent) => void`) : handles the submit of the form - the actual request is executed by the `handler` defined in user-land.

* `register` (`(name : string, attrs ?: Record<string, string>) => FieldAttributes`) : returns the attributes needed to control the field.

```js
import useForm from "@bscop/use-form";

function App () {
  const { onSubmit, pending, register } = useForm(
    // ...
  );

  const send = (payload) => {};

  return (
    <form onSubmit={onSubmit(send)}>
      <div>
        <label>
          Email:
          <input {...register("email", { type: "email" })}/>
        </label>
      </div>
      <button disabled={pending} type="submit">Save</button>
    </form>
  );
}
```

* `resetForm` (`() => void`) : reset the value of all the fields.

* `unregister` (`(name : string) => void`) : reset the state of one (or many) form field that becomes unnecessary.

## Contribute

Read the [guidelines](./CONTRIBUTING.md).

### Run tests

```
npm test
```

### Coverage

Coverage reports are hosted on [codecov](https://codecov.io/).

```
npm run badge:coverage -- --token=<guid>
```

---

Bruno Scopelliti\
www.brunoscopelliti.com
