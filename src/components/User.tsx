import { useState } from "react";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SimpleDialog from "./Modal";
import { deleteTodo } from "@/store/features/mainSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { UserData } from "types";

import classes from "./user.module.css";

export default function User() {
  const userData = useAppSelector((state) => state.data.data);
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<UserData>({} as UserData);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (el: UserData) => {
    setOpen(true);
    setEdit(el);
  };

  return (
    <>
      <div className={classes.table}>
        {userData &&
          userData.map((el) => (
            <div className={classes.tableWrapper} key={el.id}>
              <div>
                <Link href={`${el.id}`} style={{ textDecoration: "none" }}>
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
