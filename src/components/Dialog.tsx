import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useEffect, useState, useRef } from "react";
import TextField from "@mui/material/TextField";
import classes from "./modal.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { DialogActions, DialogContent } from "@mui/material";
import { UserData } from "types";
import { v4 as uuid } from "uuid";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
const getValues = () => {
  if (typeof window !== "undefined") {
    const storedValue = localStorage.getItem("data");
    if (!storedValue) {
      return [];
    }
    return JSON.parse(storedValue);
  }
};

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const [data, setData] = useState(getValues);
  const [inputVales, setInputValues] = useState<UserData>({} as UserData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    handleClose();
    setData([...data, inputVales]);
  };
  const getInputValues = (e: any) => {
    console.log(e.target.value);

    setInputValues({
      ...inputVales,
      id: uuid(),
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputVales);
  console.log(data);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle align="center">Add ToDo Tasks</DialogTitle>
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
          />
          <TextField
            id="outlined-basic"
            label="Add name of task"
            variant="outlined"
            name="todo"
            className={classes.input}
            onChange={getInputValues}
          />
          <TextField
            type="date"
            id="outlined-helperText"
            variant="outlined"
            name="date"
            className={classes.input}
            onChange={getInputValues}
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
          />
        </DialogContent>
        <DialogActions className="wrapper">
          <Button
            // onClick={handleClose}
            variant="outlined"
            className={classes.btn}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.center}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Todo List
      </Button>
      <SimpleDialog
        selectedValue={"Add Todo List"}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
