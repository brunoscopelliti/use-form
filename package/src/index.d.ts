import React from "react";

export type FieldAttributes = {
  name : string;
  onBlur : (event : React.FocusEvent) => void;
  onChange : (event : React.ChangeEvent) => void;
};


type Rule = {
  id : string;
  message ?: string;
  validate ?: () => string | undefined;
};

export type FieldValue = string | string[];

type Field = {
  label : string;
  schema : Rule[];
  value : FieldValue;
};

export type FormConfig = Record<string, Field>;

export type RequestSender = (payload: Record<string, FieldValue>) => Promise<unknown>;

export type SubmitHandler = (event : React.FormEvent) => void;

export type HookResult = {
  getFieldAttributes : (name : string) => FieldAttributes;
  pending : boolean;
  onSubmit : (send : RequestSender) => SubmitHandler;
};

declare const useForm : (formConfig : FormConfig) => HookResult;

export default useForm;
