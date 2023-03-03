import { useState } from "react";
import Button from "@mui/material/Button";
import SimpleDialog from "./Modal";

import classes from "./modal.module.css";

export default function SimpleDialogDemo() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.center}>
      <Button variant="outlined" onClick={handleToggle}>
        Add Todo List
      </Button>
      <SimpleDialog
        selectedValue={"Add Todo List"}
        open={open}
        onClose={handleToggle}
        addOrEdit="Add"
        saveOrEdit="Save"
      />
    </div>
  );
}
