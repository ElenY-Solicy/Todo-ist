import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { v4 as uuid } from "uuid";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import classes from "./modal.module.css";
import { DialogActions, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SimpleDialogProps, UserData } from "types";
import { addState, addTodo, editTodo } from "@/store/features/mainSlice";
import { useAppDispatch } from "@/hooks/hooks";

const getValues = () => {
  const storedValue = localStorage.getItem("data");
  if (!storedValue) {
    return [];
  }
  return JSON.parse(storedValue);
};

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
      localStorage.setItem("data", JSON.stringify(users));
      setData(users);
      dispatch(addTodo(inputVales as UserData));
    } else {
      const dataEdit = { ...inputVales, id: props.tasks?.id };
      console.log(dataEdit, "ggg");

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
      dispatch(addState(getValues() || data));
      setData(getValues());
    }
  }, [win]);

  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle align="center">{props.addOrEdit}</DialogTitle>
        <CloseIcon className={classes.close} onClick={handleClose} />
        <form onSubmit={handleSubmit}>
          <DialogContent className={classes.modal}>
            <TextField
              id="outlined-basic"
              label="Add Name"
              variant="outlined"
              name="name"
              className={classes.input}
              onChange={getInputValues}
              required
              defaultValue={props.tasks?.name}
            />
            <TextField
              id="outlined-basic"
              label="Add name of task"
              variant="outlined"
              name="todo"
              className={classes.input}
              onChange={getInputValues}
              required
              defaultValue={props.tasks?.todo}
            />
            <TextField
              type="date"
              id="outlined-helperText"
              variant="outlined"
              name="date"
              className={classes.input}
              onChange={getInputValues}
              required
              defaultValue={props.tasks?.date}
            />
            <TextField
              id="outlined-basic"
              label="Add Description"
              variant="outlined"
              name="description"
              multiline
              rows={1}
              maxRows={10}
              className={classes.input}
              onChange={getInputValues}
              defaultValue={props.tasks?.description}
            />
          </DialogContent>
          <DialogActions className="wrapper">
            <Button variant="outlined" className={classes.btn} type="submit">
              {props.saveOrEdit}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
