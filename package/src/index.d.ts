import React from "react";

export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FieldValue = string | string[];

export type FieldAttributes = {
  checked ?: boolean;
  multiple ?: boolean;
  name : string;
  onBlur : (event : React.FocusEvent) => void;
  onChange : (event : React.ChangeEvent) => void;
  type ?: string;
  value : FieldValue;
};

export type Rule = {
  id : string;
  condition ?: (formState : FormPayload) => boolean;
  message ?: string;
  validate ?: () => string | undefined;
};

export type Field = {
  label : string;
  schema : Rule[];
  value ?: FieldValue;
};

export type FormConfig = Record<string, Field>;

export type FormPayload = Record<keyof FormConfig, FieldValue>;

export type RequestSender = (payload: FormPayload) => Promise<unknown>;

export type SubmitHandler = (event : React.FormEvent) => void;

export type HookResult = {
  debug: () => void;
  errors: null | Record<keyof FormConfig, string>;
  getFieldValue: (name : string) => FieldValue;
  pending : boolean;
  onSubmit : (send : RequestSender) => SubmitHandler;
  register : (name : string, attrs ?: Record<string, string>) => FieldAttributes;
  reset : () => void;
  unregister : (name : string | string[]) => void;
};

declare const useForm : (formConfig : FormConfig) => HookResult;

export default useForm;
