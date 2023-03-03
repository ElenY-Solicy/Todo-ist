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
