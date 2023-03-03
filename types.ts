import { ChangeEventHandler, FormEventHandler } from "react";

export type UserData = {
  id: string;
  name: string;
  todo: string;
  date: string;
  description: string;
};
export interface User {
  data: UserData[];
}
export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
  tasks?: UserData;
  addOrEdit: string;
  saveOrEdit: string;
}

export type Input = {
  id: string;
  name: string;
  type: string;
  label: string;
  variant: any; // ?
  multiline?: boolean;
  row?: number;
  maxRows?: number;
  required?: boolean;
};

export interface FormProps {
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  defaultValue?: UserData;
  handleSubmit: FormEventHandler | undefined;
  wrapperClass: string;
  inputClass: string;
  savedOrEdit: string;
  textField: Input[];
}
