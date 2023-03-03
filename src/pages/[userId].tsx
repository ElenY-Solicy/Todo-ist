import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserData } from "types";
import { useAppSelector } from "@/hooks/hooks";

export default function UserId() {
  const route = useRouter();
  const [oneUserData, setOneUserData] = useState<UserData[]>([]);
  const userData = useAppSelector((state) => state.data.data);

  useEffect(() => {
    setOneUserData(userData.filter((el) => el.id === route.query.userId));
  }, []);

  return (
    <div className="user">
      <h1>ToDo List of User</h1>
      {oneUserData?.map((el: UserData) => (
        <div key={el.id} className="singleUSer">
          <h2>Name: {el.name}</h2>
          <span>Task: {el.todo}</span>
          <span>Data: {el.date}</span>
          <span>Description: {el?.description}</span>
        </div>
      ))}
    </div>
  );
}
