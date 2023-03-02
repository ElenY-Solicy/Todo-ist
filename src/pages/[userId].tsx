import { useAppSelector } from "@/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserData } from "types";

export default function UserId() {
  const route = useRouter();
  const [oneUserData, setOneUserData] = useState<any>([]);
  const userData = useAppSelector((state) => state.data.data);
  console.log(route.query.userId);
  useEffect(() => {
    setOneUserData(userData.filter((el) => el.id === route.query.userId));
  }, []);

  console.log(oneUserData);

  return (
    <div>
      {oneUserData?.map((el: UserData) => (
        <div key={el.id}>
          <h2>{el.name}</h2>
          <span>{el.todo}</span>
          <span>{el.date}</span>
          <span>{el?.description}</span>
        </div>
      ))}
    </div>
  );
}
