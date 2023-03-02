import { useState } from "react";
import classes from "./modal.module.css";
import Button from "@mui/material/Button";
import SimpleDialog from "./Modal";

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
        addOrEdit='Add'
        saveOrEdit="Save"
      />
    </div>
  );
}
