import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import { addState, addTodo, editTodo } from "@/store/features/mainSlice";
import Form from "./Form";
import { SimpleDialogProps, UserData } from "types";
import { useAppDispatch } from "@/hooks/hooks";
import { inputFields } from "@/inputs/inputs";
import { getValues, putValues } from "@/hooks/storage";

import classes from "./modal.module.css";

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [data, setData] = useState<UserData[]>([]);
  const [inputVales, setInputValues] = useState<UserData>({} as UserData);
  const win = typeof window !== "undefined";
  const dispatch = useAppDispatch();

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    handleClose();
    if (props.addOrEdit === "Add") {
      const users = [...data, inputVales];
      putValues("data", users);
      setData(users);
      dispatch(addTodo(inputVales as UserData));
    } else {
      const dataEdit = { ...inputVales, id: props.tasks?.id };
      dispatch(editTodo(dataEdit as UserData));
    }
  };
  const getInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputVales,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (win && !data?.length) {
      dispatch(addState(getValues("data") || data));
      setData(getValues("data"));
    }
  }, [win]);

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle align="center">{props.addOrEdit}</DialogTitle>
        <CloseIcon className={classes.close} onClick={handleClose} />
        <Form
          textField={inputFields}
          onChange={getInputValues}
          defaultValue={props.tasks as UserData}
          handleSubmit={handleSubmit}
          wrapperClass={classes.modal}
          inputClass={classes.input}
          savedOrEdit={props.saveOrEdit}
        />
      </Dialog>
    </>
  );
}
