import { Button, DialogActions } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { FormProps, UserData } from "types";

import classes from "./modal.module.css";

function Form(props: FormProps) {
  return (
    <form onSubmit={props.handleSubmit}>
      <DialogContent className={props.wrapperClass}>
        {props.textField.map((el) => (
          <TextField
            key={el.name}
            id={el.id}
            type={el.type}
            label={el.label}
            variant={el.variant}
            name={el.name}
            className={props.inputClass}
            onChange={props.onChange}
            required={el.required}
            defaultValue={props.defaultValue?.[el.name as keyof UserData]}
            multiline={el.multiline}
            rows={el.row}
            maxRows={el.maxRows}
          />
        ))}
      </DialogContent>
      <DialogActions className="wrapper">
        <Button variant="outlined" className={classes.btn} type="submit">
          {props.savedOrEdit}
        </Button>
      </DialogActions>
    </form>
  );
}

export default Form;
