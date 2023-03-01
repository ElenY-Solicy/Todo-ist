export type ModalProp = {
  children?: JSX.Element;
  show: boolean;
  toggle: () => void;
};
export type UserData = {
  id: string;
  name: string;
  todo: string;
  date: string;
  description: string;
};
