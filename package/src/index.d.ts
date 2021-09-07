import React from "react";

export type FieldElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FieldAttributes = {
  name : string;
  onBlur : (event : React.FocusEvent) => void;
  onChange : (event : React.ChangeEvent) => void;
};

export type Rule = {
  id : string;
  condition ?: (formState : FormPayload) => boolean;
  message ?: string;
  validate ?: () => string | undefined;
};

export type FieldValue = string | string[];

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
  errors: null | Record<keyof FormConfig, string>;
  getFieldAttributes : (name : string) => FieldAttributes;
  pending : boolean;
  onSubmit : (send : RequestSender) => SubmitHandler;
};

declare const useForm : (formConfig : FormConfig) => HookResult;

export default useForm;
