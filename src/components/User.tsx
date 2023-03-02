import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useState } from "react";
import classes from "./user.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteTodo } from "@/store/features/mainSlice";
import SimpleDialog from "./Modal";
import { UserData } from "types";
import Link from "next/link";

export default function User() {
  const userData = useAppSelector((state) => state.data.data);
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (el: any) => {
    setOpen(true);
    setEdit(el);
    console.log(el.name);
  };
  console.log(userData);

  return (
    <>
      <div className={classes.table}>
        {userData &&
          userData.map((el) => (
            <div className={classes.tableWrapper} key={el.id}>
              <div>
                <Link href={`${el.id}`}>
                  <h3 className={classes.gap}>{el.todo}</h3>
                  <span>{el.name}</span>
                </Link>
              </div>

              <div>
                <EditIcon
                  className={classes.icon}
                  onClick={() => handleEdit(el)}
                />
                <DeleteForeverIcon
                  className={classes.icon}
                  onClick={() => handleDelete(el.id)}
                />
              </div>
            </div>
          ))}
      </div>
      <SimpleDialog
        selectedValue={"Edit Todo"}
        open={open}
        onClose={handleClose}
        tasks={edit as UserData}
        addOrEdit="Edit"
        saveOrEdit="Edit"
      />
    </>
  );
}
